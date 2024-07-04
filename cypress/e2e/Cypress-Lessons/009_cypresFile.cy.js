///<reference types="cypress"/>

describe("Cypress File", () => {
  it("File Upload Pozitif Case", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://practice.expandtesting.com/upload");
    cy.get("#fileInput")
      .should("be.visible")
      .attachFile({ filePath: "../fixtures/media/cypressLogo.jpeg" });
    cy.get("#fileSubmit").should("be.visible").and("contain", "Upload").click();
  });

  it("ile Upload Negatif Case", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://practice.expandtesting.com/upload");
    cy.get("#fileInput")
      .should("be.visible")
      .attachFile({ filePath: "../fixtures/documents/examplePDF.pdf" });
    //if else ekleyerek eger 500kbden kücükse devam et büyükse hata mesaji al

    cy.get("#fileSubmit").should("be.visible").and("contain", "Upload").click();
  });

  it("ile Upload-ikinci yöntem", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://practice.expandtesting.com/upload");

    const fileName = "../fixtures/media/cypressLogo.jpeg";

    cy.fixture(fileName)
      .then(Cypress.Blob.base64StringToBlob) //Convert islemi yapiliyor
      .then((fileContent) => {
        cy.get("#fileInput").attachFile(
          {
            fileContent,
            fileName: fileName,
            mimeType: "image/**",
            encoding: "utf-8",
          },
          { subjectType: "input" }
        );
      });

    cy.get("#fileSubmit").should("be.visible").and("contain", "Upload").click();
  });
});

describe("Cypress File Dowload", () => {
  before(() => {
    cy.deleteDownloadsFolder();
  });
  it("File Dowload and Delete", () => {
    cy.visit("https://practice.expandtesting.com/download");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get('[data-testid="1719745973530_Test.txt"]').click();
  });
});

describe("Write ve Read File", () => {
  it("Write File", () => {
    cy.writeFile("Documents/exampleFile.docx", "Hello World");

    cy.writeFile("Documents/exampleFile.txt", "Hello World \n");
    cy.writeFile("Documents/exampleFile.txt", "Cypress Lesson continue \n", {
      flag: "a+",
    });
    cy.writeFile("Documents/exampleFile.txt", "File islemleri", { flag: "a+" });
  });

  it("Read File", () => {
    cy.readFile("Documents/exampleFile.txt").should("contain", "Hello World");
    cy.readFile("Documents/exampleFile.docx").should("eq", "Hello World");
    cy.readFile("Documents/exampleFile.txt").then((text) => {
      expect(text).to.equal(
        "Hello World \nCypress Lesson continue \nFile islemleri"
      );
    });
  });
});

describe("Web Scraping", () => {
  it("Cypress veri toplama-1", () => {
    cy.visit("https://practice.expandtesting.com/my-browser");

    cy.get("#browser-toggle")
      .as("button")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("@button")
          .should("be.visible")
          .and("have.text", "Hide Browser Information");

        const result = [];

        cy.get("tbody tr").as("tabelInfo");
        cy.get("@tabelInfo")
          .each(($el, index) => {
            cy.log("Result: " + index + "-" + $el.text());
            result.push($el.text());
          })
          .then(() => {
            cy.writeFile("Documents/results.txt", result);
          });
      });
  });

  it.only("Cypress veri toplama-2", () => {
    cy.visit("https://practice.expandtesting.com/my-browser");

    cy.get("#browser-toggle")
      .as("button")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("@button")
          .should("be.visible")
          .and("have.text", "Hide Browser Information");

        const result = [];

        cy.get("tbody tr").as("tabelInfo");
        cy.get("@tabelInfo")
          .each(($el, index) => {
            cy.log("Result: " + index + "-" + $el.text());
            result.push($el.text());
          })
          .then(() => {
            cy.writeFile("Documents/results.docx", result);
          });
      });
  });
});
