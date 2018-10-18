import React from 'react'
import { Select } from 'semantic-ui-react'

const languageOptions = [
  { key: 'en', value: 'en', flag: 'gb', text: 'English' },
  { key: 'es', value: 'es', flag: 'es', text: 'Español' },
  { key: 'br', value: 'br', flag: 'br', text: 'Portugues' },
  { key: 'jp', value: 'jp', flag: 'jp', text: '日本語' },
  { key: 'kr', value: 'kr', flag: 'kr', text: '한국어' },
  { key: 'cn', value: 'cn', flag: 'cn', text: '中文' },
  { key: 'de', value: 'de', flag: 'de', text: 'Deutsche' },
  { key: 'fr', value: 'fr', flag: 'fr', text: 'français' },
  { key: 'it', value: 'it', flag: 'it', text: 'Italiano' },
  { key: 'se', value: 'se', flag: 'se', text: 'Svenska' },
  { key: 'dk', value: 'dk', flag: 'dk', text: 'Dansk' },
  { key: 'il', value: 'il', flag: 'il', text: 'עִברִית' },
  { key: 'sa', value: 'sa', flag: 'sa', text: 'عربى' },
  { key: 'ru', value: 'ru', flag: 'ru', text: 'русский' },
  { key: 'in', value: 'in', flag: 'in', text: 'हिंदी' },
  { key: 'th', value: 'th', flag: 'th', text: 'ไทย' },
  { key: 'ng', value: 'ng', flag: 'ng', text: 'Yorùbá' }
]

const SelectLanguage = (props) => {
  function changeCountry(e, data){
    props.setLanguage(data.value)
  }
  
  return(<Select placeholder='Select your language' 
    options={languageOptions} onChange={changeCountry} search/>
  )
} 
  
export default SelectLanguage
