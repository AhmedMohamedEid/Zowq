
{
    'name': 'Zouq Theme',
    'description': 'ثيم ذوق الفاخر لمتجر المواد الغذائية والتمور',
    'category': 'Theme/Ecommerce',
    'version': '1.0',
    'author': 'Zouq Store',
    'depends': ['website', 'website_sale'],
    'data': [
        'views/layout.xml',
        'views/snippets/s_hero.xml',
        'views/snippets/snippets.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'theme_zouq/static/src/scss/style.scss',
        ],
    },
    'images': [
        'static/description/main_screenshot.png',
    ],
    'license': 'LGPL-3',
}
