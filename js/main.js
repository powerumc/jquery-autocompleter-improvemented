/**
 * Crayola colors in JSON format
 * from: https://gist.github.com/jjdelc/1868136
 */
 
$(function () {
  $('#nope').autocompleter({
        // marker for autocomplete matches
        highlightMatches: true,

        // object to local or url to remote search
        source: "./color.json",

        // custom template
        template: '{{ rgb }} <span>({{ hex }})</span>',

        // show hint
        hint: true,

        // abort source if empty field
        empty: false,

        // max results
        limit: 5,

	    delay: 1000,

        callback: function (value, index, selected) {
            if (selected) {
                $('.icon').css('background-color', selected.hex);
            }
        }
    });
});
