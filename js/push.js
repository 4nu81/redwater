$(window).ready(function(){

    function ud_ajax() {
        return 'Du hast eine Nachricht!'
    }

    $('#ud_push').click(function(){
        Push.create(ud_ajax(), {
            tag: 'Nachricht',
            body: 'Text der Nachricht',
            timeout: 0
        })
    })
})