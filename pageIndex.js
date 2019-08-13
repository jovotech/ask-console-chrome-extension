const locationSplitIndex = location.href.split('/');


const validUrls = [
    'https://developer.amazon.com/alexa/console/ask#/skills',
    'https://developer.amazon.com/alexa/console/ask'];


const localesMap = {
    'English (IN)': 'en_IN',
    'English (AU)': 'en_AU',
    'English (US)': 'en_US',
    'English (CA)': 'en_CA',
    'English (UK)': 'en_GB',
    'German (DE)': 'de_DE',
    'Portuguese (BR)': 'pt_BR',
    'French (CA)': 'fr_CA',
    'French (FR)': 'fr_FR',
    'Spanish (MX)': 'es_MX',
    'Spanish (ES)': 'es_ES',
    'Spanish (US)': 'es_US',
    'Italian (IT)': 'it_IT',
    'Japanese (JP)': 'jp_JP',
    'Hindi (IN)': 'hi_IN',
};

// index page (skills list)
if (validUrls.includes(location.href)) {

    $(document).ready(function () {
        addLinkToTest();
        let linkToTestInitialized = false;
        $("body").on('DOMSubtreeModified', "#tenant-content", function() {

           const skills = $('.astro-table-body tr.astro-table-row').length;

           // wait until the skill table is fully loaded
           if (skills > 0 && linkToTestInitialized === false) {
               linkToTestInitialized = true;
               $('tr.astro-table-row').each(function(item)  {

                   const linkToEdit = $(this).find('a[data-qa-hook="skill-list-page-build-link"]').first();
// link to simulator

                   if (linkToEdit.length > 0) {
                       let testHref = linkToEdit.attr('href');
                       testHref = testHref.replace('/build/custom/', '/test/');
                       testHref = testHref.replace('/dashboard', '');
                       linkToEdit.parent().after($('<span><a href="'+ testHref + '">Test</a></span>'));

                        const dashboardHref = linkToEdit.attr('href');

                        const locales = $(this).find('.astro-row.skill-list-page__column').first().text().trim();
                        $(this).find('.astro-row.skill-list-page__column').first().html('');
                        locales.split(',').forEach((item) => {
                            if (localesMap[item.trim()]) {

                                let linkDashboard = dashboardHref.replace(/\/([\w]{2})_([\w]{2})\//gi, '/' + localesMap[item.trim()] + '/');

                                let html = '<a href="'+linkDashboard+'">' + item + '</a>';
                                $(this).find('.astro-row.skill-list-page__column').first().append(html)
                            }
                        });
                   }




               })
           }

        });

    });

    function addLinkToTest() {

    }

}
