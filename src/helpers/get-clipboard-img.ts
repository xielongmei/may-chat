export const uploadPasteImages = (event: any) => {
  return new Promise<string | null>((resolve, reject) => {
    if (!event.clipboardData || !event.clipboardData.items) {
      resolve(null);
    }
    const item = event.clipboardData.items[0];

    if (item.kind === 'file') {
      const file = item.getAsFile();
      if (item.type.match('^image/')) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async function (e: any) {
          const base64 = e.target.result.split('base64,')[1];
          resolve(base64);
        };
      }
    }
  });
};