const legacyFontSizes = {
  gigantic: {
    replacementName: 'extraLarge'
  },
  tiny: {
    replacementName: 'extraSmall'
  },
}

const fontSizes = {
  extraLarge: '5rem',
  large: '3rem',
  medium: '1rem',
  small: '0.75rem',
  extraSmall: '0.5rem',
}

const proxyOptions = {
  get: (target, prop) => {
    if (prop in legacyFontSizes) {
      const { replacementName } = legacyFontSizes[prop];
      console.warn(
        `The font size "${prop}" has been deprecated.`,
        `Use "${replacementName}" instead.`
      );
      return target[replacementName];
    }
    return Reflect.get(target, prop);
  }
}

const proxiedFontSizes = new Proxy(fontSizes, proxyOptions);

export default proxiedFontSizes;

// console.log(proxiedFontSizes.gigantic); // 5rem, with a deprecation warning

// // this won't display tiny or gigantic but they're still accessible:
// console.log(proxiedFontSizes);
