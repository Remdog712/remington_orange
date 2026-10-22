/* Shared keyboard and dialog behavior for portfolio media. */
document.addEventListener('DOMContentLoaded', () => {
    const dialogs = [...document.querySelectorAll('#lightbox, #videobox, #modelbox')];
    let activeDialog = null;
    let returnFocus = null;
    let previousOverflow = '';
    const inertState = new Map();
    const focusable = dialog => [...dialog.querySelectorAll('button:not(:disabled), a[href], iframe, model-viewer, [tabindex="0"]')]
        .filter(element => element.getClientRects().length);
    const isOpen = dialog => getComputedStyle(dialog).display !== 'none' && dialog.getAttribute('aria-hidden') !== 'true';
    dialogs.forEach(dialog => {
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('aria-label', dialog.id === 'modelbox' ? '3D model viewer' : dialog.id === 'videobox' ? 'Video viewer' : 'Image viewer');
        dialog.tabIndex = -1;
        new MutationObserver(() => {
            if (isOpen(dialog) && activeDialog !== dialog) {
                returnFocus = document.activeElement;
                activeDialog = dialog;
                previousOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
                [...document.body.children].forEach(sibling => {
                    if (sibling === dialog || sibling.contains(dialog) || sibling.tagName === 'SCRIPT') return;
                    inertState.set(sibling, sibling.inert);
                    sibling.inert = true;
                });
                (focusable(dialog)[0] || dialog).focus();
            } else if (!isOpen(dialog) && activeDialog === dialog) {
                activeDialog = null;
                inertState.forEach((value, element) => { element.inert = value; });
                inertState.clear();
                document.body.style.overflow = previousOverflow;
                if (returnFocus?.isConnected) returnFocus.focus();
            }
        }).observe(dialog, { attributes: true, attributeFilter: ['style', 'aria-hidden'] });
    });
    document.addEventListener('keydown', event => {
        if (!activeDialog) return;
        if (event.key === 'Escape') {
            event.preventDefault();
            activeDialog.querySelector('.close, #videobox-close, #modelbox-close')?.click();
        } else if (event.key === 'Tab') {
            const controls = focusable(activeDialog);
            const first = controls[0], last = controls[controls.length - 1];
            if (!first) { event.preventDefault(); activeDialog.focus(); }
            else if (event.shiftKey && (document.activeElement === first || document.activeElement === activeDialog)) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
    });
    // Existing project galleries retain their layout and click handlers.
    document.querySelectorAll('.gallery-item img, .image-group img, .main-image img, .thumbnail-group img').forEach(img => {
        if (img.closest('a, button')) return;
        img.setAttribute('role', 'button');
        img.tabIndex = 0;
        img.setAttribute('aria-label', `${img.closest('.thumbnail-group') ? 'Select' : 'Open'} ${img.alt || 'project image'}`);
        img.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                if (img.closest('.thumbnail-group')) img.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
                else img.click();
            }
        });
        img.addEventListener('click', () => {
            if (img.closest('.thumbnail-group')) img.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
            const enlarged = document.getElementById('lightbox-img');
            if (enlarged) enlarged.alt = img.alt || img.getAttribute('data-description') || 'Project image';
        });
    });
    const syncPressed = () => document.querySelectorAll('.filter-option, .control-btn, .videobox-playlist button').forEach(button => {
        button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    });
    syncPressed();
    new MutationObserver(syncPressed).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
    document.querySelectorAll('header nav a').forEach(link => {
        if (link.pathname === location.pathname) link.setAttribute('aria-current', 'page');
    });
});
