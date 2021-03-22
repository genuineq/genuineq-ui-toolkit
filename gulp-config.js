const project = require('./package.json')

/************************ PROJECT NAME *********************************
***********************************************************************/
const projectName = "project name";

/************* SET PATH FOR PROJECT TYPE TO TRUE ***********************
***********************************************************************/
const octoberCms = true;

/************************ GULP CONFIG **********************************
* SOURCE_ROOT          Location of UI Source files
* DEVELOPMENT_ROOT     Location of compiled files for development
* PRODUCTION_ROOT      Location of compiled files for production
***********************************************************************/
if (octoberCms) {
    var SOURCE_ROOT = 'genuineq-ui'
    var DEVELOPMENT_ROOT = `themes/${projectName}/assets`
    var PRODUCTION_ROOT = `themes/${projectName}/assets`
} else {

}

/******************* DO NOT EDIT BELOW THIS LINE ***************************
***************************************************************************/
module.exports = {

    root: './',

    // name: PROJECT_NAME,

    src: {
        root: SOURCE_ROOT,
        scss: `${SOURCE_ROOT}/scss`,
        js: `${SOURCE_ROOT}/javascript`,
        img: `${SOURCE_ROOT}/images/img`,
        fonts: `${SOURCE_ROOT}/fonts`,
    },

    development: {
        root: DEVELOPMENT_ROOT,
        scss: `${DEVELOPMENT_ROOT}/css`,
        js: `${DEVELOPMENT_ROOT}/javascript`,
        img: `${DEVELOPMENT_ROOT}/images/img`,
        fonts: `${DEVELOPMENT_ROOT}/fonts`
    },

    production: {
        root: PRODUCTION_ROOT,
        scss: `${PRODUCTION_ROOT}/stylesheets`,
        js: `${PRODUCTION_ROOT}/javascript`,
        img: `${PRODUCTION_ROOT}/images`,
        fonts: `${PRODUCTION_ROOT}/fonts`
    }
}

