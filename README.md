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

![Dark mode / light mode switch](https://imgur.com/N72iZIV.jpg)
A toggle button in the top right corner of the app can switch between the light and dark modes for the app on click. This also generates a new random team name in the header row.

![Related product cards](https://imgur.com/GialhVf.jpg)
Products related to the currently selected product in the Overview section of the app are displayed with the pertinent information:

- Product name
- Product category
- Price (also sales price, if applicable)
- Average customer review, from one to five stars

![Related product carousel](https://imgur.com/kbOWhem.jpg)
Clicking to the left and the right on this carousel allows the user to scroll through the products in this carousel. The left button is not visible when the first product in the carousel is at the left side of the carousel. The same is true of the right button when the last product is at the right side of the carousel.

![Comparison modal between currently selected product and related product](https://imgur.com/dsiHo4w.jpg)
The star icon at the top right corner of a product card can be clicked on to open a comparison between the currently selected and related product of interest. All characteristics applicable to either product are displayed in a center columnm, with the characteristics related to the current product on the left column and those related to the realted product on the right. Characteristics not held by a particular product are left block. The 'X' button in the lower right corner of the modal can be clicked to close the modal and return the the related products view.

![Addition of items to the outfit itmes carousel](https://i.imgur.com/jle1MmZ.gif)
A button on the left side of the carousel in the "Your Outfits" section will add the currently selected product in the overview section to this carousel. Two of the same product cannout be added to the carousel at any time.

![Deletion of items from outfit itmes carousel](https://i.imgur.com/DQQK2Tp.gif)
The red 'X' button in the top right corner of any product in the "Your Outfits"" carousel can be clicked to remove a product from the carousel.

=================================================

## QUESTIONS AND ANSWERS SECTION

=================================================

## RATINGS AND REVIEWS SECTION

Ratings & Review

*Note: Each gif below features varying products. The star progression bars, characteristic range bars (lower left) change dynamically per product (characteristics only pertinent to the product appear).  Additionally, the star ratings average located in Overview, Related Products and Ratings & Reviews change dynamically per product to a quarter of a point.

![test](http://g.recordit.co/1LLgeJmkUH.gif)
Hyperlink from Overview to Ratings & Review Section. *Note: The star rating in the Overview section matches the Reviews section and dynamically changes per product change.

![test](http://g.recordit.co/mrJ6YAOzHn.gif)
Color Theme & Masthead Team Change per Toggle Button switch in upper right screen.

![test](http://g.recordit.co/rUXA9P51B4.gif)
Initial Value of two Review Items. "Add Review" button increments list two at a time initiating scroll feature. "Add Review" button disappears once list is fully rendered. *Note: Star Rating Type Progression bars & Characteristics Ranges within the left breakdown column dynamically change per product change.

![test](http://g.recordit.co/W0hEyGAY2j.gif)
Photo Modal pops up when thumbnail is clicked within the list column, and closes with button click. Sort list renders the list results based on dropdown with relevance, helpfulness, and newest categories. Additional filtering based on individual star rating is also available in the breakdown column. Filtered choices toggled between selected and visible with highlight to unselected per click.

 ![test](http://g.recordit.co/x6X9WjsN5I.gif)
Hovering over "Helpful" in the list section switches color to green indicating a user actionable item. Upon click increments count by one. As seen below, hovering has a similar feature with "Report". The font color to red and upon click removes that review from that user's list rendering. This does not delete the report off the API.

 ![test](http://g.recordit.co/WzBCajlA9V.gif)


Modal
*Only pertinant characteristic features appear per product type

![test](http://g.recordit.co/ueFapJpnC9.gif)
"Add A Review" button opens the modal.  The star rating selection features hover, onMouseEnter/OnMouseLeave and Tooltips to distinguish the rating.

![test](http://g.recordit.co/NxYhGbNMXE.gif)
Radio Buttons are used in both helpfulness and characteristic sections.  The selected choice per characteristic is featured under the specified heading.

![test](http://g.recordit.co/AdTMwuhlUL.gif)
Input and textarea fields, character counter and a nested photo modal popup feature finishes out the 'Add A Review' modal display


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

- Exectue 'npm install' to install all of the above dependencies and development dependencies for this repo.

- Execute 'npm run watch' to allow for transpilation with updating on each save.
- Execute 'npm run start' to the Express server connection to the app.

=================================================

## AUTHORS:

==================================================
- Cheryl Casas
- Robert "Bo" Czajka
- Richard Linley
- Alex Nahas
