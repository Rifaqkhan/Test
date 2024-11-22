import HomePage from "./HomePage";

const VisitMainPage = new HomePage();

class MainSiteNavigation {

    // Visit the main page
    visitMainPage() {
        this.mobileMode();
        VisitMainPage.navigate();
        this.verifyMainBar();
        this.verifyBurgerIcon();
        this.clickBurgerIcon();
    }

    // Visit the Customer Support page
    customerSupportPage() {
        this.navigateToSection('Customer Support', this.verifyMainHeadingCasino);
    }

    // Casino navigation sections
    casinoNavSections() {
        const sections = [
            'Popular', 'New', 'Slots', 'Jackpots', 'Buy Feature', 'Hot Slots',
            'Table Games', 'Drops & Wins', 'Cash Drop', 'Arcade', 'Cluster Games', 
            'Latest Provider', 'Exclusives'
        ];
        sections.forEach(section => this.navigateToCasinoSection(section));
    }

    // Live Casino navigation sections
    liveCasinoSections() {
        const sections = ['Popular', 'Game Shows', 'Roulette', 'Blackjack', 'Baccarat', 'Poker'];
        sections.forEach(section => this.navigateToLiveCasinoSection(section));
    }

    // Promotions navigation sections
    promotionsSections() {
        const sections = ['Welcome Bonus', 'Boost XP', 'Casino Promotions', 'Live Casino Promotions', 'All Promotions'];
        sections.forEach(section => this.navigateToPromotionSection(section));
    }

    // Reusable method for navigating to a casino section
    navigateToCasinoSection(section) {
        this.navigateToSection('Casino', section, this.verifyMainHeadingCasino);
    }

    // Reusable method for navigating to a live casino section
    navigateToLiveCasinoSection(section) {
        this.navigateToSection('Live Casino', section, this.verifyMainHeadingLiveCasino);
    }

    // Reusable method for navigating to a promotions section
    navigateToPromotionSection(section) {
        this.navigateToSection('Promotions', section, this.verifyMainHeadingPromotions);
    }

    // Helper method for navigating to any section
    navigateToSection(navItem, section, verifyHeading) {
        this.verifyDropDown();
        this.clickNavItem(navItem);
        this.clickSubSection(section);
        verifyHeading.call(this);
        this.verifyMainBar();
        this.verifyBurgerIcon();
        this.clickBurgerIcon();
    }

    // Helper method for clicking any navigation item
    clickNavItem(navItem) {
        cy.get('[class="sc-hCgVqe dsORuR"]').contains(navItem).should('be.visible').click();
    }

    // Helper method for clicking any subsection under a navigation item
    clickSubSection(subSection) {
        cy.get('[data-af="sub-nav"]').should('be.visible').contains(subSection).click();
    }

    // Common verifications
    verifyMainBar() {
        cy.get('[class="sc-ktyGiW iUFXBu"]').should('be.visible');
    }

    verifyBurgerIcon() {
        cy.get('[class="sc-eELIPF jAxlpg ax-header-trigger"]').should('be.visible');
    }

    clickBurgerIcon() {
        cy.get('.sc-hNKHps .sc-ftvSup').should('be.visible').click();
    }

    verifyDropDown() {
        cy.get('.sc-eEOqmf').should('be.visible');
    }

    // Mobile viewport mode
    mobileMode() {
        cy.viewport('iphone-x');
    }

    // Section header verifications
    verifyMainHeadingCasino() {
        cy.get('[class="sc-hHLeRK fBEXHA gtm-heading h1 "]').invoke('text').should(text => {
            const trimmedText = text.trim();
            expect(trimmedText).to.match(/Boost Casino Support Center|Popular|New Games|Slots|Jackpots|Buy Feature Games|Hot Slots Games|Casino games|Cash Drop Games|Drops & Wins|Cluster Games|Arcade Games|Latest Provider Games|Exclusives Games/);
        });
    }

    verifyMainHeadingLiveCasino() {
        cy.get('[class="sc-hHLeRK fBEXHA gtm-heading h1 "]').invoke('text').should(text => {
            const trimmedText = text.trim();
            expect(trimmedText).to.match(/Live Casino|Game Shows|Roulette|Blackjack|Baccarat|Poker/);
        });
    }

    verifyMainHeadingPromotions() {
        cy.get('[class="sc-hHLeRK fBEXHA gtm-heading h1 "]').invoke('text').should(text => {
            const trimmedText = text.trim();
            expect(trimmedText).to.match(/Welcome Bonus|Boost XP|Casino Promotions|Live Casino Promotions|Promotions/);
        });
    }
}

export default MainSiteNavigation;

