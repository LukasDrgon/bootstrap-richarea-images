# RichArea Images Plugin

A plugin for [RichArea](http://github.com/benallfree/bootstrap-richarea) to enable image uploading and cropping. Comes with dozens of responsive Bootstrap layouts for beautiful image support.

## Quickstart

    npm require --save-dev bootstrap-richarea-images

This plugin has an unfortunate number of dependencies beyond RichArea:

* jQuery Cropit
* jQuery Migrate
* jQuery Tether
* jQuery Actual

RichArea itself requires Bootstrap 3 or 4 CSS and JS, jQuery, jQuery UI, and Vue. These are not bundled with RichArea.

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.ui/1.11.4/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/js/bootstrap.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.0/vue.min.js"></script>    

Then:

    <script src="https://cdn.jsdelivr.net/bootstrap-modal-fullscreen/1.0.0/bootstrap-richarea.min.js"></script>


## Usage

See examples.

## Building

To build RichArea and accompanying JS:

    npm run package

Thumbnails are a separate task because they take so long.

    npm run thumbnails


