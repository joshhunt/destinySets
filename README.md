# Destiny Sets

## Getting started

Just want to update the set data? You can skip this party

Prerequisites:

* A fairly recent installation of Node - I use v8.9.3
* Able to use Terminal/bash

1. Copy `.env.local-sample` to `.env.local` and fill in `REACT_APP_API_KEY` and
   `REACT_APP_AUTH_URL` with your Bungie.net API key and and auth URL (see below
   for how to get these)

2. Install dependencies with `npm install` (or `yarn install` if you have Yarn)

3. Run the local dev server with `npm start` (or `yarn install` if you have
   Yarn)

4. You should see "Compiled successfully!", with instructions, and the site
   should open in your browser.

   * Note, as we're using HTTPS locally with a self-signed certificate, you'll
     get a security warning. You'll need to 'proceed anyway' to continue.

## How to contribute to the set data

1. Open the appropriate data file in `src/setData`
2. Look at the structure of the data - it reflects the layout of each page on
   the site. Ultimately, items on the pages are specified in the `items` array,
   by their item hash (ID).
3. Search for an item on the
   [Data Explorer page on DestinySets.com](https://destinysets.com/data), click
   the item and copy the `hash` - the number in the little box next to the
   item's name in the overlay.
   * e.g. The hash for "Contender's Shell" is `113124080`.
4. Paste the hash into the appropriate items array in the data file you're
   making the change to. Just make sure you keep the syntax valid, observing
   commas, etc. It's also nice to include the little `// item name` comment at
   the end of each line to make it easier for the next person
5. Save the file and Submit the pull request via Github 🎉

If you're adding multiple items in one set, the Data Explorer has a special mode
to make it easier. Click the "Explore the entire Destiny 2 database..." text at
the top to enable "Collect Mode". Now, as you click an item it'll appear in the
sidebar, automatically categorised, and copied to your clipboard in a format
appropriate for the data files.
