import { currentTheme, refreshTheme } from 'devextreme/viz/themes';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
    storageKey = "themeSelected";
    getTheme() {
        return window.localStorage[this.storageKey]
    }

    getThemeData() {
        return [
            { text: "Dark", value: "blue.dark" },
            { text: "Light", value: "blue.light" },
        ]
    }

    applyTheme(theme?: string) {
        let themeMarker = "dx.theme.material.";

        theme = theme || window.localStorage[this.storageKey] || "blue.dark";

        for (let index in document.styleSheets) {
            let styleSheet = document.styleSheets[index],
                href = styleSheet.href;
            if (href) {
                let themeMarkerPosition = href.indexOf(themeMarker);
                if (themeMarkerPosition >= 0) {
                    let startPosition = themeMarkerPosition + themeMarker.length,
                        endPosition = href.indexOf(".css"),
                        fileNamePart = href.substring(startPosition, endPosition);
                    styleSheet.disabled = fileNamePart != theme;
                }
            }
        }

        window.localStorage[this.storageKey] = theme;
        currentTheme('material.' + theme);
        refreshTheme();
    }

    constructor() { }
}
