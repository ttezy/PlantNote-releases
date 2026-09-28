"use strict";

// Downloads and installation instructions work without JavaScript.
// Only the explicit copy action uses the clipboard; it never reads it.
const copyButton = document.querySelector("[data-copy-source]");
const sourceField = document.getElementById("source-url");
const copyStatus = document.getElementById("copy-status");

if (copyButton && sourceField && copyStatus) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard unavailable");
      }
      await navigator.clipboard.writeText(sourceField.value);
      copyStatus.textContent = "已复制，在 SideStore 中粘贴即可。";
    } catch {
      sourceField.focus();
      sourceField.select();
      sourceField.setSelectionRange(0, sourceField.value.length);
      copyStatus.textContent = "已选中地址，请长按或按 Ctrl/Cmd+C 复制。";
    }
  });
}
