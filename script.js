//your JS code here. If required.
cy.get('#prev').should('not.be.disabled').click();
cy.get('#next').click(); // Move forward, enabling the 'Prev' button.
cy.get('#prev').should('not.be.disabled').click(); // Click the 'Prev' button once it's enabled.
cy.get('#prev', { timeout: 6000 }).should('not.be.disabled').click();
