import * as MODEL from '../model/model.js';

function init() {

    $("nav a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";
    
        if (btnId == "home") {
            $("nav").removeClass("black-nav").addClass("white-nav");
            // MODEL.getPageContent(contentId);
        }else {
            $("nav").removeClass("white-nav").addClass("black-nav");
            // MODEL.getPageContent(contentId);
        }

        if (btnId == "gallery") {
            MODEL.getPageContent(contentId, addGalleryListeners);
        }else if (btnId == "blog") {
            MODEL.getPageContent(contentId, addBlogListeners);
        } else {
            MODEL.getPageContent(contentId);
        }

        // MODEL.getPageContent(contentId, addGalleryListeners);

        
    })
    
}

function addGalleryListeners() {
    $("#app .gallery-content .gallery-images-holder a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";

        MODEL.getPageContent(contentId);
    });
}

function addBlogListeners() {
    $("#app .blog-content .blog-flex a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";

        MODEL.getPageContent(contentId);
    });
}

$(document).ready(function() {
    init()
    MODEL.getPageContent("homeContent");
})