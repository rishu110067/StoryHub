const moment = require('moment');
const { model } = require('mongoose');

const FavStory = require('../models/FavStory');

module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format);
    },
    truncate: function (str, len) {
        if(str.length > len) {
            let new_str = ' ';
            new_str = str.substr(0, len);
            new_str = str.substr(0, new_str.lastIndexOf(' '));
            new_str = new_str.length > 0 ? new_str : str.substr(0, len);
            return new_str + '...';
        }
        return str;
    },
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, '');
    },
    editIcon: function (storyUser, loggedUser, storyId) {
        if (storyUser._id.toString() == loggedUser._id.toString()) {
            return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"> 
                <i class="fas fa-edit fa-small"></i> 
            </a>`;
            
        } else {
            return '';
        }
    },
    addFav: function (isFav) {
        if (isFav) {
            return `<input type="hidden" name="_method" value="DELETE">
                <button type="submit" class="btn pink">
                    Remove from Favourite
                </button>`;
        } else {
            return `<button type="submit" class="btn">
                    Add to Favourite
                </button>`;
        }
    },
    select: function (selected, options) {
        return options
            .fn(this)
            .replace(
                new RegExp(' value="' + selected + '"'),
                '$& selected="selected"'
            )
            .replace(
                new RegExp('>' + selected + '</option>'),
                ' selected="selected"$&'
            );
    },
}