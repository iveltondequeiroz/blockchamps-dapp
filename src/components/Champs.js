import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'

import axios from 'axios'
import getWeb3 from '../utils/getWeb3'
import Clubs from '../json/topclubs.json'


import { compare, daysLeft, findCountryName } from '../helper.js'


import Champ from '../components/Champ'
import Stats from '../components/Stats'
import InputGoals from '../components/InputGoals'
import GiphyFrame from '../components/GiphyFrame'
import MetaMaskWarning from './MetaMaskWarning'
import WorldRank from './WorldRank'

import TeamsContract from '../../build/contracts/SoccerChamps.json'
import TokenContract from '../../build/contracts/Boleiro.json'
import eurCountries from '../json/eur-countries.json'
import samCountries from '../json/sam-countries.json'
import namCountries from '../json/nam-countries.json'
import asiCountries from '../json/asi-countries.json'
import afrCountries from '../json/afr-countries.json'
import ocaCountries from '../json/oca-countries.json'

import '../css/champs.css'

import { Grid, Progress, Header } from 'semantic-ui-react'

import { Image , Step, Icon } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import { Card, Label, Flag } from 'semantic-ui-react'
import { Segment, Button } from 'semantic-ui-react'

import enLanguage from '../json/en-champs.json'
import brLanguage from '../json/br-champs.json'
import esLanguage from '../json/es-champs.json'



const teamMax = 40

const circle = { width: 155, height: 155, backgroundColor:'olive' }
       
class Champs extends Component {
  constructor(props) {
    super(props)

    this.setView = this.setView.bind(this)
    this.selectCountry = this.selectCountry.bind(this)
    this.selectRegion = this.selectRegion.bind(this)
    this.transferCoin = this.transferCoin.bind(this) 
    
    
    this.state = {
      lang: 'en',
      languageData: enLanguage,
      noMetamask: true,
      isStarting: true,
      goalPriceEth: 0.002,
      goalPriceWei: 0,
      account: '0x',
      accountTo: '0x',
      withdrawGoals: 1,
      depositGoals: 1,
      web3: 'local',
      teams: [],
      filteredTeams: ['a','a'],
      teamsTotal: 0,
      goalsTotal: 0,
      scored:false, 
      currentlub: 'none',
      teamsInstance: null,
      tokenInstance: null,
      accounts: null,
      isLoading: true,
      isFiltering: false,
      showPlayButton: false,
      show: {display:'none'},
      noshow: {display:'block'},
      loadingTeam: 0,
      loadingTeamName: '',
      goalsScored: 0,
      countries: [],
      etherPrice: 0,
      oneDolarInEther: 0,
      audioOn: true,
      bgAudio : new Audio("sounds/loading.mp3"),
      introAudio : new Audio("sounds/loading.mp3"),
      cheerAudio : new Audio("sounds/cheer.mp3"),
      whistleAudio : new Audio("sounds/whistle.mp3"),
      goalAudio : new Audio("sounds/goal.mp3"),
      stepDisabled: 'disabled',
      championshipTitle: '2018 CRYPTO-WORLD CHAMPIONSHIP',
      continentOptions : [],
      eurOptions : eurCountries,
      samOptions : samCountries,
      namOptions : namCountries,
      asiOptions : asiCountries,
      ausOptions : ocaCountries,
      afrOptions : afrCountries,
      region: 'wrl',
      country: 'none',
      champ: {
        logo: '',
        name: '',
        flag: '',
        country: '',
        countryName: '',
        goals: 0
      },
      tokenName: '',
      tokenSymbol: '',
      tokenCap: 0,
      tokenSupply: 0,
      unmounting: false,
      eurChampion: {},
      asiaChampion: {},
      samChampion: {},
      namChampion: {},
      oceChampion: {},
      afrChampion: {},
      regions:[]
    }

// eslint-disable-next-line
    const loaderStyle = {
       display: this.state.isLoading ? 'block':'none'
    };

  }

  componentWillMount() {

    getWeb3
    .then(results => {
      if(results.web3==='local') {
        this.setState({web3: results.web3, isStarting: false })
        return    
      }
      this.setState({ web3: results.web3, isStarting: false, noMetamask: false }, () => {
        this.state.web3.version.getNetwork((err, netId) => {
          switch (netId) {
            case "1":
              //console.log('This is MAINNET')
              break
            case "2":
              console.log('This is the deprecated Morden test network.')
              break
            case "3":
              console.log('This is the ropsten test network.')
              break
            case "4":
              console.log('This is the Rinkeby test network.')
              break
            case "42":
              console.log('This is the Kovan test network.')
              break
            default:
              console.log('This is an unknown network.')
          }
        })
      })

      this.playIntro()
      this.setState({ teams: Clubs })
      this.setState({ teamsTotal: Clubs.length })
      this.instantiateContract()
      this.instantiateToken()

    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  componentDidMount() {
    const enRegionOptions = [
        { value: 'wrl', text: 'World', image: {  src: 'imgs/btns/wrlbtn.png' } },
        { value: 'eur', text: 'Europe', image: {  src: 'imgs/btns/eurbtn.png' } },
        { value: 'asia', text: 'Asia', image: { src: 'imgs/btns/asiabtn.png' } },
        { value: 'sam', text: 'South America', image: {  src: 'imgs/btns/sambtn.png' } },
        { value: 'nam', text: 'North America', image: {  src: 'imgs/btns/nambtn.png' } },
        { value: 'aus', text: 'Oceania', image: { src: 'imgs/btns/ausbtn.png' } },
        { value: 'afr', text: 'Africa', image: { src: 'imgs/btns/afrbtn.png' } },
    ]

    const brRegionOptions = [
        { value: 'wrl', text: 'Mundo', image: {  src: 'imgs/btns/wrlbtn.png' } },
        { value: 'eur', text: 'Europa', image: {  src: 'imgs/btns/eurbtn.png' } },
        { value: 'asia', text: 'Asia', image: { src: 'imgs/btns/asiabtn.png' } },
        { value: 'sam', text: 'America do Sul', image: {  src: 'imgs/btns/sambtn.png' } },
        { value: 'nam', text: 'America do Norte', image: {  src: 'imgs/btns/nambtn.png' } },
        { value: 'aus', text: 'Oceania', image: { src: 'imgs/btns/ausbtn.png' } },
        { value: 'afr', text: 'Africa', image: { src: 'imgs/btns/afrbtn.png' } },
    ]

    const esRegionOptions = [
        { value: 'wrl', text: 'Mundo', image: {  src: 'imgs/btns/wrlbtn.png' } },
        { value: 'eur', text: 'Europa', image: {  src: 'imgs/btns/eurbtn.png' } },
        { value: 'asia', text: 'Asia', image: { src: 'imgs/btns/asiabtn.png' } },
        { value: 'sam', text: 'Sudamerica', image: {  src: 'imgs/btns/sambtn.png' } },
        { value: 'nam', text: 'Norteamérica', image: {  src: 'imgs/btns/nambtn.png' } },
        { value: 'aus', text: 'Oceanía', image: { src: 'imgs/btns/ausbtn.png' } },
        { value: 'afr', text: 'África', image: { src: 'imgs/btns/afrbtn.png' } },
    ]

    //console.log("CHAMPS this.props.selLang", this.props.selLang)
    switch(this.props.selLang) {
      case 'br': this.setState({languageData: brLanguage, regions: brRegionOptions}); break
      case 'es': this.setState({languageData: esLanguage, regions: esRegionOptions }); break
      default: this.setState({languageData: enLanguage,  regions: enRegionOptions }) 
    }

    this.setState({lang: this.props.selLang })
      
    axios.get('https://api.coinmarketcap.com/v2/ticker/1027/')
      .then(res => {
        let crypto = res.data.data
        let etherPrice = crypto.quotes.USD.price
        this.setState({ etherPrice })
    }) 
  }

  componentWillUnmount() {
    this.state.bgAudio.pause()
    this.state.introAudio.pause()
  }


  playIntro(){
    // eslint-disable-next-line
    this.state.bgAudio.onended = function() {
      this.play();  
    }

    // eslint-disable-next-line
    this.state.bgAudio.volume = 0.2;
     this.state.bgAudio.play()
  }

  setLanding() {
  }

  setVolume(){
    if(this.state.audioOn) {
      this.state.bgAudio.pause()
      this.state.introAudio.pause()
    } else {
      this.state.bgAudio.play()
    }
    this.setState({audioOn: !this.state.audioOn})
  }

  setVolume2(){
    if(this.state.audioOn) {
      this.state.bgAudio.pause()
      this.state.introAudio.pause()
    } else {
      this.state.bgAudio.play()
      this.state.introAudio.play()
    }
    this.setState({audioOn: !this.state.audioOn})
  }


  instantiateContract() {
    const contract = require('truffle-contract')
    const teamsContract = contract(TeamsContract)    
    teamsContract.setProvider(this.state.web3.currentProvider)
    var teamsInstance

    this.state.web3.eth.getAccounts((error, accounts) => {
      teamsContract.deployed().then((instance) => {
        teamsInstance = instance

        this.setState({ teamsInstance: teamsInstance, accounts: accounts},
          () => {
            this.getGoalPrice()
            this.setView("wrl")
          })

      
        var goalsScoredEvent = teamsInstance.LogScoreGoals();
        goalsScoredEvent.watch(function(error, result) {
          if (!error) {
            console.log("Evento Watch", result)
            console.log("Evento Watch result.args>", result.args)
          } else {
            console.log("Evento Watch ERROR")
            console.log(error)
          }
        })
      })
    })
  } 


 getGoalPrice(){
    this.state.teamsInstance.getGoalPrice.call().then((price) =>{
      //console.log("* sol.goalPrice:", price.toNumber(), typeof price )
      this.setState({ goalPriceWei: price, 
                      goalPriceEth: this.state.web3.fromWei(price, 'ether')})

    })
  }


  instantiateToken() {
    
    const contract = require('truffle-contract')
    const tokenContract = contract(TokenContract)
    tokenContract.setProvider(this.state.web3.currentProvider)
    var tokenInstance

    this.state.web3.eth.getAccounts((error, accounts) => {
      tokenContract.deployed().then((instance) => {
        tokenInstance = instance
        this.setState({ tokenInstance }, () => {
            tokenInstance.name().then((tokenName) =>{
              this.setState({ tokenName }) 
            })
            tokenInstance.symbol().then((tokenSymbol) =>{
              this.setState({ tokenSymbol }) 
            })
              tokenInstance.cap().then((tokenCap) =>{
              this.setState({ tokenCap: tokenCap.toNumber() })  
            })
            
            tokenInstance.totalSupply().then((tokenSupply) =>{
              this.setState({ tokenSupply: tokenSupply.toNumber() })  
            })
          })
        })
      }) 
  } 


  setView(_region){
    this.setState({isFiltering: true}) 
    let stepDisabled =  ''
    let trans = this.state.languageData[0].champs
    let  championshipTitle = trans.worldtitle
    
    switch(_region) {
      case "wrl": this.setState({country: 'none'})
                  stepDisabled =  'disabled'
                  championshipTitle = trans.worldTitle
                  break
      case "eur": this.setState({continentOptions : this.state.eurOptions})
                  championshipTitle = trans.eurTitle
                  break
      case "sam": this.setState({continentOptions : this.state.samOptions})
                  championshipTitle = trans.samTitle  
                  break
      case "nam": this.setState({continentOptions : this.state.namOptions })
                  championshipTitle = trans.namTitle
                  break
      case "asia": this.setState({continentOptions : this.state.asiOptions })
                  championshipTitle = trans.asiaTitle
                  break
      case "aus": this.setState({continentOptions : this.state.ausOptions })
                  championshipTitle = trans.ausTitle
                  break
      case "afr": this.setState({continentOptions : this.state.afrOptions })
                  championshipTitle = trans.afrTitle
                  break
      default:    this.setState({continentOptions : this.state.europeOptions})
    }

    this.setState({stepDisabled, championshipTitle})

    this.setState({region: _region}, () => {
      this.setState({country: 'none'}, () => {
        this.filterTeams()
      })
    })
  }

  filterTeams(){
    var filtrado = this.state.teams.filter( t => {
      if(this.state.region === 'wrl') {  return  true }
      else if(this.state.country === 'none') { return (t.region === this.state.region) }
      else { return (t.region === this.state.region && t.country === this.state.country) }
    })
    this.setState({ filteredTeams: filtrado }, () => {
      this.getTeamsGoals()
    })
  }

  async getTeamsGoals () {
    var novotimes = [...this.state.filteredTeams]
    
    let goalsTotal = 0
    for(var  i=0; i<this.state.filteredTeams.length; i++) {
      const result = await this.state.teamsInstance.getTeamGoals(this.state.filteredTeams[i].id, this.state.accounts[0]);  
      let noGoals = result.toNumber()
      if(noGoals<1 && this.state.region === 'wrl') continue;
      novotimes[i].goals = noGoals
      novotimes[i].scoregoals = 1
      novotimes[i].buttonLabel = this.props.selLang==='en'?'Score Goals':'Marque Gols'
      novotimes[i].ethval = this.state.goalPriceEth
      novotimes[i].tx='0x0'
      let loadingTeamName = this.state.filteredTeams[i].name;
      goalsTotal += noGoals
      if(this.state.isLoading) {
        this.setState({ loadingTeam: i+1, loadingTeamName })
      }  
    }

    this.state.bgAudio.pause()
    this.state.cheerAudio.play()

    this.setState({ filteredTeams : novotimes, isLoading : false, showPlayButton: true }, () => {
      this.state.filteredTeams.sort(compare)
      this.setChamp(this.state.filteredTeams[0])
      this.worldChamps()
    })
    this.setState({ goalsTotal })
    
  }

  worldChamps(){
    let filteredEur = this.state.filteredTeams.filter( t => {
      if(t.region === 'eur') {  return  true }
      else return false
    })

    let eurChampion = filteredEur[0] 
    
    let filteredAsia = this.state.filteredTeams.filter( t => {
      if(t.region === 'asia') {  return  true }
      else return false
    })
    let asiaChampion = filteredAsia[0] 
    
    let filteredSam = this.state.filteredTeams.filter( t => {
      if(t.region === 'sam') {  return  true }
      else return false
    })
    let samChampion = filteredSam[0] 
    
    let filteredNam = this.state.filteredTeams.filter( t => {
      if(t.region === 'nam') {  return  true }
      else return false
    })
    let namChampion = filteredNam[0] 

    let filteredOce = this.state.filteredTeams.filter( t => {
      if(t.region === 'aus') {  return  true }
      else return false
    })

    let oceChampion = filteredOce[0] 

    let filteredAfr = this.state.filteredTeams.filter( t => {
      if(t.region === 'afr') {  return  true }
      else return false
    })
    let afrChampion = filteredAfr[0] 

    this.setState({eurChampion, asiaChampion, samChampion, namChampion, oceChampion, afrChampion})
    
  }

  setChamp(_champ){
    let countryName = findCountryName(_champ.country)
    let newChamp =  {
      logo: 'imgs/'+_champ.region+'/'+_champ.country+'/'+_champ.id+'.png',
      name: _champ.name.toUpperCase(),
      flag: _champ.country,
      country: _champ.country,
      countryName: countryName,
      goals: _champ.goals
    }
    this.setState({ champ: newChamp }, function() {
      this.setState({ isFiltering: false })
    })
  }


  selectRegion(e, r){
    this.setState(prevState => ({ region: r.value, country: 'none', isLoading: true }), () => {
        this.setView(this.state.region)
    })
  }
  selectCountry(e, d){
    this.setState(prevState => ({ country: d.value }), () => {
        this.filterCountry(this.state.country)
    })
  }

  filterCountry(_country){
    var filtrado = this.state.teams.filter( t => {
      return (t.country === this.state.country)
    })

    this.setState({ filteredTeams: filtrado }, () => {
      this.getTeamsGoals()
    })
  }

 
  teamScoreGoals( _team, _goals){
    let teamsInstance = this.state.teamsInstance
    let valueInWei = this.state.goalPriceWei
    let totalGoalsInWei = valueInWei * _goals  
    
    _team.buttonLabel = this.props.selLang==='en'?'Scoring Goals,  please wait...':'Marcando Gols, favor aguarde...'
    _team.isScoring = true
    _team.tx="0x0"
    _team.blrtx="0x0"
    _team.blr=0
    _team.claim=true
    _team.claimmsg=false
    this.forceUpdate()
    this.state.whistleAudio.play()
  
    teamsInstance.scoreGoals(_team.id, _goals, {
      from: this.state.accounts[0],
      value: totalGoalsInWei,
      gas: 500000,
      gasPrice: 5000000000
    }).then((result) => {
      
      this.state.goalAudio.play()
      _team.tx = result.tx 
      if(result.receipt.status==="0x0") {
        _team.tx = "error:"+ result.tx
      }
      this.forceUpdate()
      this.state.cheerAudio.play()
    
      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];

        if (log.event === "LogScoreGoals") {
          _team.goals += _goals
          _team.scoregoals = 1 
          _team.blr = _goals * 2
          _team.ethval = this.state.goalPriceEth
          _team.isScoring = false
          _team.buttonLabel = this.props.selLang==='en'?'Score Goals':'Marque Gols'

          this.forceUpdate()

          this.state.filteredTeams.sort(compare)
          this.setChamp(this.state.filteredTeams[0])
          break;
        } else {
          console.log("other thing happened>", log)
        }
      }
    }).catch((e) => {
      _team.buttonLabel = this.props.selLang==='en'?'Score Goals':'Marque Gols'
      _team.isScoring = false
      this.forceUpdate()    
    }) 
  }


  transferCoin(team) {
    team.claim = false
    team.claimmsg = true     
    this.forceUpdate()
    let amount = team.blr
    let receiverAccount =  this.state.accounts[0]
    let amountToMint = amount * 10 ** 18;  
    let test ='0x3E05b7ACd8E9179a7d9a0c10002B7C2f91Bc137B'
    this.state.tokenInstance.mint(receiverAccount, amountToMint, {from:test, gasPrice: 3000000000})
    .then((result) => {
      team.blrtx = result.tx
      this.forceUpdate()
    }).catch((e) => {
      team.claim = true
      team.claimmsg = false     
      this.forceUpdate()
    })
  }


  render() {
    const trans = this.state.languageData[0].champs 
    if(this.state.isStarting) {
      return( <div /> )
    }
    
    if(this.state.noMetamask) {
      return( <MetaMaskWarning selLang={this.props.selLang}  /> )
    }
    
    return (
        <div className="container">    
          <div>
            <Grid>
              <Grid.Column width={16}>
                <Step.Group>
                  <Step>
                    <Icon name='globe' />  
                    <Step.Content>
                      <Step.Title>{trans.chooseRegion}</Step.Title>
                      {!this.state.isLoading &&
                        <div>
                        <Dropdown selection search 
                          value={this.state.region}
                          options={this.state.regions}
                          onChange={this.selectRegion} 
                        />
                      </div>
                      }      
                    </Step.Content>
                  </Step>
                  <Step className={this.state.stepDisabled}>
                    <Icon name='flag' />
                    <Step.Content>
                      <Step.Title>{trans.selCountry}</Step.Title>
                      <div>
                        <Label>
                           {trans.countryLabel}
                        </Label>
                        {!this.state.isFiltering &&
                          <Dropdown defaultValue={this.state.country} 
                            search  
                            options={this.state.continentOptions} 
                            onChange={this.selectCountry} 
                          />
                        }
                      </div>
                    </Step.Content>
                  </Step>
                  
                  <Step>
                    <Icon name='soccer' />
                    <Step.Content>
                      <Step.Title>{trans.selClub1}</Step.Title>
                      <Step.Description>{trans.selClub2}</Step.Description>
                    </Step.Content>
                  </Step>
                </Step.Group>
              </Grid.Column>   
            </Grid>

            <Grid width={16} textAlign="center" >     
              <Grid.Column width={11} textAlign="center" style={{margin:'0px', padding:'1px'}}>     
                <Header as='h2' style={{color:'lightblue'}}>
                  {this.state.championshipTitle}
                </Header>
              </Grid.Column>
              <Grid.Column width={5} textAlign="center" >     
                &nbsp;
              </Grid.Column>
            </Grid>
            <Grid stackable centered>

              { this.state.isLoading &&
                <div>
                <Grid.Row>
                <Grid.Column width={6} textAlign="center" >     
                  <div className="center">
                    <Label color='blue' pointing='below'>{trans.loading + ' ' + this.state.loadingTeamName}</Label>
                    <Progress value={this.state.loadingTeam}
                              total={this.state.filteredTeams.length}
                              progress='percent' 
                              precision={0} 
                              autoSuccess>
                     </Progress>
                  </div>
                </Grid.Column>
                <Grid.Column width={10}>
                  &nbsp;     
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column width={6} textAlign="center" >     
                  <GiphyFrame />
                </Grid.Column>
                </Grid.Row>
                <Grid.Column width={10}>
                  &nbsp;     
                </Grid.Column>
                
                </div>
              }

              <Grid.Column width={13}>
                {!this.state.isFiltering && !this.state.isLoading && <div>
                   <Champ club={this.state.champ.name} 
                          goals={this.state.champ.goals} 
                          region={this.state.region} 
                          country={this.state.country} 
                          countryName={this.state.champ.countryName}
                          flag={this.state.champ.flag} 
                          logo={this.state.champ.logo}
                          leaderTitle={trans.leaderTitle}
                          championshipTitle={this.state.championshipTitle}
                          goalsTitle={trans.goals} 
                  />
                </div>
                }

                {(!this.state.isFiltering && !this.state.isLoading && this.state.region === 'wrl') && <div>
                    
                  <WorldRank
                    eurChamp={this.state.eurChampion}
                    asiaChamp={this.state.asiaChampion}
                    samChamp={this.state.samChampion} 
                    namChamp={this.state.namChampion}
                    oceChamp={this.state.oceChampion}
                    afrChamp={this.state.afrChampion}
                    lang={this.state.lang}
                  />
                </div>
                }
              
              </Grid.Column>
              {!this.state.isLoading &&
                <Grid.Column width={3}>
                <Stats stat={daysLeft()} info={trans.daysLeft} iconName="calendar" estilo={circle}/>
                <Stats stat={this.state.loadingTeam} info={trans.clubs} iconName="flag checkered" estilo={circle}/>
                <Stats stat={this.state.goalsTotal} info={trans.goalsScored} iconName="soccer" estilo={circle}/>
              </Grid.Column>
              }

              <Grid.Row>
              {(!this.state.isFiltering && !this.state.isLoading)  &&
                <Grid.Column width={14} textAlign="center">
                  <Header as='h2' style={{color:'white'}}>TOP 40</Header>
                </Grid.Column>
              }  

              {(!this.state.isFiltering && !this.state.isLoading)  &&

              <Grid.Column width={14}>
                {this.state.filteredTeams.map((team, index) => 
                  <div className="centerTeam" key={team.id}>
                    {index<teamMax &&
                      <Segment.Group horizontal>
                        <Segment>
                          <Card >
                            <Card.Content>
                              <Card.Header>
                                <Image src={'imgs/'+team.region+'/'+team.country+'/sml/'+team.id+'.png'} style={{backgroundColor: 'white'}} />
                                &nbsp;&nbsp;{team.name} 
                              </Card.Header>
                            </Card.Content>
                            <div>
                              <Label size="medium" color='violet'>Ranking {'#'} {index+1} - {team.goals} {trans.goals}</Label>
                              <Label size="medium"><Flag name={team.country!=='gbsct'?team.country:'gb sct'}/>&nbsp; {findCountryName(team.country)}</Label>
                            </div>
                          </Card>
                        </Segment>
                        <Segment>
                            <Card.Content extra>              
                              <div>
                                <Label style={{backgroundColor: 'white'}}>
                                  {trans.goals}&nbsp;
                                      <InputGoals goalprice={this.state.goalPriceEth}
                                                  etherPrice={this.state.etherPrice}
                                                  team={team} 
                                                  teamScoreGoals={this.teamScoreGoals.bind(this)}
                                                  scoreGoalTitle={trans.scoreGoals}
                                                  receiveTitle={trans.receiveTitle}
                                      />
                              
                                </Label>
                              
                                <div style={{paddingTop:'10px'}} className='centerScorer'>
                                  {
                                    team.tx !=="0x0" && <a href={"https://etherscan.io/tx/"+team.tx} target="_blank">
                                    {trans.woohoo}
                                     {team.tx.substring(1, 10) }...
                                    </a>
                                  } 
                                </div>
                                <div style={{paddingTop:'10px'}} className='centerScorer'>
                                  {
                                    (team.blr !==0 && team.blrtx ==='0x0') &&
                                    <div>
                                      <Button disabled={!team.claim} onClick={(e) => this.transferCoin(team)} size='small'>
                                         {trans.claimtoken} {team.blr} boleiros {trans.now} 
                                      </Button>
                                      { team.claimmsg===true &&
                                        <Label style={{backgroundColor: 'white'}}>
                                          {trans.claimmsg}
                                        </Label>  
                                      }
                                    </div>  
                                  }
                                </div>  
                                <div style={{paddingTop:'10px'}}>
                                  {
                                    team.blrtx !=='0x0' &&
                                    <div>
                                      <a href={"https://etherscan.io/tx/"+team.blrtx} target="_blank">Boleiros {trans.transfered} {team.blrtx.substring(1, 10)}...</a>
                                    </div>
                                  }    
                                </div>
                              </div>  
                            </Card.Content>
                        </Segment>
                      </Segment.Group>
                    }
                </div>)}
              </Grid.Column>
              } 
              <Grid.Column width={2}>
              </Grid.Column>
            </Grid.Row>  
            </Grid>
          </div>
        </div>
    );
  }
}

export default Champs