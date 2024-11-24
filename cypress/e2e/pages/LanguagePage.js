class LanguagePage {
    // Select a language from the dropdown
    selectLanguage(languageCode, expectedUrl) {
        this.getLanguageBar()
            .invoke('text').should(text => {
            const trimmedText = text.trim();
            expect(trimmedText).to.match(/EN|FI|EE|RU/);
        });;

        this.getPointer();
        this.getDropdownOptions()
            .contains(languageCode)
            .click();

        // Verify URL
        cy.url().should('eq', expectedUrl);

        // Verify selected language in the bar
        this.getLanguageBar()
            .should('include.text', languageCode.toUpperCase());
    }

    // Get the language bar
    getLanguageBar() {
        return cy.get('[class="sc-hhFzXm ieIXVu"]')
            .should('exist');
    }

    // Click the language dropdown pointer
    getPointer() {
        cy.get('.sc-hhFzXm .sc-ftvSup')
            .should('be.visible')
            .click();
    }

    // Get dropdown options
    getDropdownOptions() {
        return cy.get('[direction="column"]')
            .should('be.visible');
    }

    // Get current language from the language bar
    getCurrentLanguage() {
        return cy.get('.[class="sc-hhFzXm ieIXVu"]').invoke('text').should(text => {
            const trimmedText = text.trim();
            expect(trimmedText).to.match(/EN|FI|EE|RU/);
        });
    }
}

export default LanguagePage;

