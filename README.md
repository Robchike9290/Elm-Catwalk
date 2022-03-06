# ELM-CATWALK

Team Elm's FEC Project Repo

==================================================

## GENERAL INFORMATION:

This is a demo eCommerce website hosted on a database of mock data that it split into four sections:

- Overview
- Related Products
- Questions and Answers
- Ratings and Reviews

Data is rendered dymanically from this API based upon client input. No actual eCommerce transactions are executable from the site.

=================================================

## OVERVIEW SECTION

=================================================

## RELATED PRODUCTS SECTION

![Dark mode / light mode switch](https://imgur.com/N72iZIV)
A toggle button in the top right corner of the app can switch between the light and dark modes for the app on click. This also generates a new random team name in the header row.

![Related product cards](https://imgur.com/GialhVf)
Products related to the currently selected product in the Overview section of the app are displayed with the pertinent information:

- Product name
- Product category
- Price (also sales price, if applicable)
- Average customer review, from one to five stars

![Related product carousel](https://imgur.com/kbOWhem)
Clicking to the left and the right on this carousel allows the user to scroll through the products in this carousel. The left button is not visible when the first product in the carousel is at the left side of the carousel. The same is true of the right button when the last product is at the right side of the carousel.

![Comparison modal between currently selected product and related product](https://imgur.com/dsiHo4w)
The star icon at the top right corner of a product card can be clicked on to open a comparison between the currently selected and related product of interest. All characteristics applicable to either product are displayed in a center columnm, with the characteristics related to the current product on the left column and those related to the realted product on the right. Characteristics not held by a particular product are left block. The 'X' button in the lower right corner of the modal can be clicked to close the modal and return the the related products view.

![Deletion of items from outfit itmes carousel](https://imgur.com/Fq4eT6c)
The red 'X' button in the top right corner of any product in the "Your Outfits"" carousel can be clicked to remove a product from the carousel.

![Addition of items to the outfit itmes carousel](https://imgur.com/rQrxM2Y)
A button on the left side of the carousel in the "Your Outfits" section will add the currently selected product in the overview section to this carousel. Two of the same product cannout be added to the carousel at any time.

=================================================

## QUESTIONS AND ANSWERS SECTION

=================================================

## RATINGS AND REVIEWS SECTION

![test](http://g.recordit.co/LrqGWOA9lV.gif)

=================================================

## TECHNOLOGIES USED

### Dependencies

    - Axios: Version 0.25.0,
    - Bootstrap: Version 5.1.3,
    - Dateformat: Version 5.0.3,
    - Express: Version 4.17.2,
    - File-loader: Version 6.2.0,
    - Filestack JS: Version 3.25.0,
    - Moment: Version 2.29.1,
    - React: Version 17.0.2,
    - React DOM: Version 17.0.2,
    - React Highlight Words: Version 0.17.0,
    - Underscore: Version 1.13.2,
    - URL-loader: Version 4.1.1

### Development Dependencies

    - Babel/preset-env: Version 7.16.11,
    - Babel/preset-react: Version 7.16.7,
    - Babel-loader: Version 8.2.3,
    - CSS-loader: Version 6.6.0,
    - Nodemon: Version 2.0.15,
    - Style-loader: Version 3.3.1,
    - Webpack: Version 5.68.0,
    - Webpack CLI: Version 4.9.2

==================================================

## INSTALLATION INSTRUCTIONS:

- Execture 'npm install' to install all of the above dependencies and development dependencies for this repo.

- Execute 'npm run watch' to allow for transpilation with updating on each save.
- Execute 'npm run start' to the Express server connection to the app.

=================================================

## AUTHORS:

- Cheryl Casas
- Robert "Bo" Czajka
- Richard Linley
- Alex Nahas
