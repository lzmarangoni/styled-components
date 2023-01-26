import React from 'react'
import themeOff from '../../assets/images/themeOff.svg'
import themeOn from '../../assets/images/themeOn.svg'
import { Icone } from '../../assets/UI'

const claro = <Icone src={themeOn} alt='Tema Claro'/>
const escuro = <Icone src={themeOff} alt='Tema Escuro'/>

export default ({tema}) => (tema ? claro : escuro)