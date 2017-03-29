/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import Header from '../header/Header.jsx'
import axios from 'axios'
import Reveal from 'reveal.js/js/reveal';
import 'reveal.js/css/reveal.css'
import 'jquery/dist/jquery.min.js'
import 'reveal.js/css/theme/simple.css'
import '../../asset/fonts/league-gothic/league-gothic.woff'
import '../../asset/fonts/league-gothic/league-gothic.ttf'
import '../../asset/fonts/source-sans-pro/source-sans-pro-italic.woff'
import '../../asset/fonts/source-sans-pro/source-sans-pro-italic.ttf'
import './app.scss'
class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('App' + 'constructor' + arguments);
        this.state={
            per:1
        }
    }

    componentWillMount() {
        console.log('App' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('App' + ' componentDidMount' + arguments);
        Reveal.initialize();

        // const canvas= document.querySelector('#canvas');
        // const ctx=canvas.getContext('2d');
        // ctx.moveTo(500, 500);
        // ctx.lineTo(600,600);
        // ctx.lineWidth = 3;
        // ctx.strokeStyle="#0000ff";
        // ctx.stroke();
    }

    componentWillReceiveProps() {
        console.log('App' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('App' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('App' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('App' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('App' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('App' + 'rendering');
        return (
            <div className="PPT_Contariner" >
            <div className="reveal">
                <div className="slides">
                    <section><div className="pg pg1">123</div></section>
                    <section>
                        <section><div className="pg pg2">345</div></section>
                        <section><div className="pg pg3">654</div></section>
                    </section>
                </div>
            </div>
            {/*<canvas id="canvas"  width='1200' height='1200'></canvas>*/}
            </div>
        )
    }
}

export default (App);