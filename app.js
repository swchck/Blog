const commands = {
    'help': {
        'text': `$ <b>help</b><br>
        >&nbsp;Welcome to my CLI resume.<br>
        &nbsp;Available commands list is:<br>
        &nbsp;- help<br>
        &nbsp;- about<br>
        &nbsp;- projects<br>
        &nbsp;- contacts<br>
        &nbsp;- funfact`
    },
    'about': {
        'text': `$ <b>about</b> <br>
        >&nbsp;Hello!<br>
        &nbsp;My name is Andrew and I'm a Java developer. <br>
        &nbsp;This simple CLI-like resume will guide you through projects I've made and will tell you a bit about my experience. <br>
        &nbsp;My main skills are: <br>
        &nbsp;- Java <br>
        &nbsp;- Spring         <br>
        &nbsp;- HTML/CSS/LESS   <br>
        &nbsp;- Python          <br>
        <br>
        &nbsp;You can find list of all available commands by typing "help" in console. <br>
        &nbsp;This thing is written by <a href='https://github.com/swchck'>@swchck</a>, 2018.`
    },
    'projects': {
        'text': `$ <b>Job & Education</b> <br>
        >&nbsp;Here lies list of work and pet projects I made. <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <br>
        &nbsp;&nbsp;Corporative/work projects: <br>
        <br>
        - GazInformService: <br>
        <br>
        &nbsp;&nbsp;position: 'design engineer'; <br>
        &nbsp;&nbsp;remote: false; <br>
        &nbsp;&nbsp;startsAt: new Date ('21-01-2018'); <br>
        &nbsp;&nbsp;endsAt: undefined; <br>
        &nbsp;&nbsp;description: ""; <br>
        &nbsp;&nbsp;skills: [<pre>
            Java,
            PostgreSQL,
            ElasticSearch,
            Groovy,
            JMeter,
            Linux,
            Writing Project Documentation,

            ]; </pre>
        - Heineken:<br>
        <br>
        &nbsp;&nbsp;position: 'System Administrator';<br>
        &nbsp;&nbsp;remote: false; <br>
        &nbsp;&nbsp;startsAt: new Date ('17-08-2017'); <br>
        &nbsp;&nbsp;endsAt: new Date ('28-12-2017'); <br>
        &nbsp;&nbsp;description: ""; <br>
        &nbsp;&nbsp;skills: [<pre>
            Linux,
            Windows,
            Writing Project Documentation,
            Service Desk,
            Cisco,
            ]; </pre><br>`
    },
    'contacts': {
        'text': `$ <b>contacts</b> <br>
        >&nbsp;You can contact me via email: <br>
        &nbsp;<b>swchck@gmail.com</b><br>
        >&nbsp;or on Telegram: <br>
        &nbsp;<b>@swchck</b>`
    },
    'error': {
        'text': '<br>>&nbsp;lost? Try writing "help" in console.'
    },
    'funfact': {
        'text': `$ <b>funfact</b>
        <br>> Did you know that you can destroy your Linux PC simply by typing 'sudo mv ~ /dev/null' in console? Try it out!`
    },
}
const $ = (cn) => {
    item = document.getElementById(cn);
    return item;
}

const handle = (e) => {
    console.log(e.keyCode)
    e.keyCode == 13 ? consInput('inp') : console.log('not ent');
}

/**
 * Takes input from text-field and pass it to handler if it matches any command from list.
 * @param {string} inp input from console
 */
const consInput = (inp) => {
    command = $(inp).value;
    error   = '$ '+command+commands.error.text;
    $(inp).value = '';
    $('text').innerHTML = (commands[command] ?  commands[command].text : error);
}

document.addEventListener('keypress', handle);
