this["JST"] = this["JST"] || {};
this["JST"]["albumcoll"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"albums_collection\">\n <h1>My Albums</h1>\n <ul></ul>\n</div>\n";
  },"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["albumlist"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li data-list-name=\""
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "</li>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["albumthumb"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li>\n  <div class=\"thumb-box\">\n    <div class=\"sample-photo\">\n      <img width=\"200\" src=\""
    + escapeExpression(((helper = (helper = helpers.photo_url || (depth0 != null ? depth0.photo_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_url","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"album-name\"><a href=\"#\" data-album-id="
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + ">"
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "</a></div>\n  </div>\n</li>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["photofull"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"album-full\">\n  <a href=\"#\">Back to Albums</a>\n  <div class=\"photo\">\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n  <div class=\"info\">\n    <table>\n      <tr>\n        <th>Album:</th>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "</td>\n      </tr>\n      <tr>\n        <th>Description:</th>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</td>\n      </tr>\n    </table>\n  </div>\n</div>\n";
},"useData":true});