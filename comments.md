Just a quick bit of feedback:

Make sure you gitignore your node modules or you'll end up with a commit like your first one on the dev branch: 702 files edited!
This makes it hard to look at the diffs of what you've actually changed in that commit. It also means that you're storing and transferring a
whole lot of data that can just be downloaded using NPM. The package.json file's responsibility is to hold all of that information
so that git doesn't need to track all of those dependencies.
