# BCU Labs Website


## Making content changes

Most of the page content is in [Markdown](https://commonmark.org/help/) (`.md` files), which provide a more human-readable way to write up page content that computers can still turn into [HTML](https://developer.mozilla.org/docs/Web/HTML).

You can still include snippets of HTML in those Markdown files where you need to for custom page elements (e.g., a `<div class="featured-links">`).


## Testing locally

You can follow [GitHub's instruction for testing a GitHub Pages site locally with Jekyll](https://docs.github.com/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

If you don't want to install Ruby to run actual Jekyll, you can also use a Node.js substitute:

1. Run `npm install`, which will install Darko\*, which can serve the Jekyll site.
2. Run `npm start` to serve the site locally.
3. Open `http://localhost:4000` in a browser.

<small>(\*Technically a [slightly modified](https://github.com/cyjake/darko/issues/19#issuecomment-3162446016) version of Darko.)</small>

The built site in `/_site` is set to be ignored by Git and shouldn't be committed.


## Updating the live instance

Commit your changes to a branch and submit a pull request.

When changes are pushed to the `main` branch, GitHub Pages will automatically update the live site.
