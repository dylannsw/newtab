const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'DuckDuckGo',
      key: '*',
      url: 'https://google.com',
      search: '/search?q={}'
    },
    {
      category: 'General',
      name: 'Mail',
      key: 'm',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Drive',
      key: 'dr',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(90deg, #22c1c3, #fdbb2d)',
      icon: 'drive',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Telegram',
      key: 'tg',
      url: 'https://web.telegram.org',
      color: '#5682a3',
      icon: 'telegram',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'WhatsApp',
      key: 'wa',
      url: 'https://web.whatsapp.com',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'whatsapp',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Discord',
      key: 'dc',
      url: 'https://discord.com/app',
      color: '#7289da',
      icon: 'discord',
      quickLaunch: false,
    },


    {
      category: 'Programming',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'ColourPicker',
      key: 'cp',
      url: 'https://www.webfx.com/web-design/color-picker',
      search: '/search?q={}',
      color: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(62,133,238,1) 1.1%, rgba(227,137,240,1) 43.7%, rgba(243,193,124,1) 89.7% )',
      icon: 'colourpicker',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Nordtheme',
      key: 'nt',
      url: 'https://www.nordtheme.com',
      color: 'linear-gradient(112deg, rgba(46,52,64,1) 0%, rgba(52,52,59,1) 43%, rgba(76,86,106,1) 100%)',
      icon: 'nord',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Icons',
      key: 'ic',
      url: 'https://icons8.com/icons',
      search: '/search?q={}',
      color: 'linear-gradient(to right, #19547b, #ffd89b)',
      icon: 'icons',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'FirefoxCSS',
      key: 'ff',
      url: 'https://www.reddit.com/r/FirefoxCSS/',
      color: 'linear-gradient( 76.3deg,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% )',
      icon: 'firefoxcss',
      quickLaunch: true,
    },
    {
      category: 'Fun',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient( 111.1deg,  rgba(0,40,70,1) -4.8%, rgba(255,115,115,1) 82.7%, rgba(255,175,123,1) 97.2% )',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient( 111.1deg,  rgba(0,40,70,1) -4.8%, rgba(255,115,115,1) 82.7%, rgba(255,175,123,1) 97.2% )',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Anime',
      key: 'an',
      url: 'https://9anime.to/home',
      color: 'linear-gradient(30deg, rgba(115,63,251,1) 0%, rgba(205,168,255,1) 100%)',
      icon: 'anime',
      quickLaunch: true,
    },
    {
      category: 'Fun',
      name: 'Pinterest',
      key: 'pi',
      url: 'https://www.pinterest.com',
      color: 'linear-gradient(68.3deg, rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2% )',
      icon: 'pinterest',
      quickLaunch: true,
    },
    {
      category: 'Fun',
      name: 'Spotify',
      key: 's',
      url: 'https://open.spotify.com/',
      search: '/search/{}',
      color: 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%',
      icon: 'spotify',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Twitter',
      key: 'tw',
      url: 'https://www.twitter.com',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
      icon: 'twitter',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Instagram',
      key: 'ig',
      url: 'https://www.instagram.com',
      color: 'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
      icon: 'instagram',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'MonkeyType',
      key: 'mt',
      url: 'https://monkeytype.com',
      search: '/search/results/all/?keywords={}',
      color: 'radial-gradient(circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )',
      icon: 'monkeytype',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'DeviantArt',
      key: 'da',
      url: 'https://www.deviantart.com',
      color: 'linear-gradient(90deg, #1d976c, #93f9b9)',
      icon: 'deviantart',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Love',
      key: 'yx',
      url: 'https://i.imgur.com/LxY9PBa.jpg',
      color: 'url("https://i.imgur.com/LxY9PBa.jpg") no-repeat center center fixed',
      icon: 'Love',
      quickLaunch: true,
    },
  ],
  
  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 4
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 4
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ';',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
