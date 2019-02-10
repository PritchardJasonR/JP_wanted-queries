// WQ objects
var wqCommands = {
    //Click by text
    clickText: function (text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },

    fillFields: function (field) {
        //Fill fields function for boundary value analysis
        if (field.wID) {
            this
                //wid
                .setValue('@wID', field.wID)
        }
        if (field.hdr) {
            //hdr
            this
                .setValue('@hdr', field.hdr)
        }
        if (field.hair) {
            //hair
            this
                .setValue('@hair', field.hair)

        }if (field.offence) {
            //offence
            this
                .setValue('@offence', field.offence)
        }

        if (field.mke) {
            //mke
            this
                .setValue('@mke', field.mke)
        }
        if (field.ori) {
            //ori
            this
                .setValue('@ori', field.ori)
        
        }
        if (field.name) {
            //name
            this
                .setValue('@name', field.name)
        }
        if (field.sex) {
            //sex
            this
                .clickText(field.sex)
        }
        if (field.race) {
            //race
            this
                .clickText(field.race)
        }
        if (field.height) {
            //height
            this
                .setValue('@height', field.height)
        }
        if (field.weight) {
            //weight
            this
                .setValue('@weight', field.weight)
        }
        if (field.dateW) {
            //dateW
            this
                .setValue('@dateW', field.dateW)
        }
        if (field.dl) {
            //dl
            this
                .setValue('@dl', field.dl)
        }
        if (field.dlState) {
            //dlState
            this
                .setValue('@dlState', field.dlState)
        }
        if (field.dlDate) {
            //dlDate
            this
                .setValue('@dlDate', field.dlDate)
        }
        if (field.lp) {
            //lp
            this
                .setValue('@lp', field.lp)
        }
        if (field.lpState) {
            //lpState
            this
                .setValue('@lpState', field.lpState)
        }
        if (field.lpDate) {
            //lpdate
            this
                .setValue('@lpDate', field.lpDate)
        }
        


        return this
    }
}
//Page Objects
module.exports = {
    url: "http://localhost:3000/#/",
    commands: [wqCommands],
    elements: {


        hdr: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        ori: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'input[name="sexInput"]',
        race: 'input[name="racInput"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offence: 'input[name="offInput"]',
        dateW: 'input[name="dowInput"]',
        dl: 'input[name="olnInput"]',
        dlState: 'input[name="olsInput"]',
        dlDate: 'input[name="oldInput"]',
        lp: 'input[name="licInput"]',
        lpState: 'input[name="lisInput"]',
        lpDate: 'input[name="lidInput"]',
        wID: 'input[name="widInput"]',
        reason: 'input[name="resInput"]',
        cancelDate: 'input[name="datInput"]',
        save: '#saveBtn',
        clear: '#clearBtn',
        menus: '.bm-burger-button',
        enter: 'p[name="enterOption"]',
        modify: 'p[name=modifyOption]',
        cancel: 'p[name=cancelOption]',
        title: 'span[name="queryTitle"]',
        text: 'span[name="queryBody"]',

    }
}
