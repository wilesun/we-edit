import React, {Component, PropTypes} from "react"
import {HasChild} from "./any"
import Group from "../composed/group"
import Page from "../composed/page"

export default class Document extends HasChild{
	static displayName="document"

	render(){
		const {computed:{composed}, props:{width, height}}=this
		const {pageGap, style, ...others}=this.props
        return (
			<div>
				<div style={{display:"none"}}>
				{super.render()}
				</div>
				<svg style={style}
					ref="svg"
					width={width}
					height={height}
					viewBox={`0 0 ${width} ${height}`}>
					<Composed ref="composed" gap={pageGap} canvas={{width}} sections={()=>
						this.computed.children.reduce((collected, section)=>{
							collected.push(section.computed.composed)
							return collected
						},[])}
						/>
					{this.more()}
				</svg>
			</div>
		)
    }
	
	compose(){
		
	}

	appendComposed(page){
		if(this.refs.composed)
			this.refs.composed.setState({composedTime: new Date().toString()})
	}

	componentDidMount(){
		let {pageGap, width, height}=this.props
		const {svg, composed}=this.refs
		let {height:contentHeight, pages}=composed.info

		height=	Math.max(contentHeight, height)+1*pageGap
		svg.setAttribute('height',height)
		svg.setAttribute('viewBox',`0 0 ${width} ${height}`)
	}

	componentDidUpdate(){
		this.componentDidMount()
	}

	more(){
		return null
	}

	static defaultProps={
		width: typeof(window)=='undefined' ? 10000 : window.innerWidth,
		height: typeof(window)=='undefined' ? 10000 : window.innerHeight,
		pageGap: 20,
		style: {
			background:"lightgray"
		}
	}

	get composed(){
		return this.refs.composed
	}
}

class Composed extends Group{
	render(){
		const {sections, gap, canvas}=this.props
		const info=this._info={height:gap, pages:0}
		return (
			<Group y={gap}>
			{
				sections().map((pages,i,a,b,y=0)=>{
					return <Group y={info.height} key={i}>{
						pages.map((page,i)=>{
							let newPage=(<Group y={y} x={(canvas.width-page.size.width)/2} key={i}><Page {...page}/></Group>)
							y+=(page.size.height+gap)
							info.height+=(page.size.height+gap)
							info.pages++
							return newPage
						})
					}</Group>
				})
			}
			</Group>
		)
	}

	get info(){
		return this._info
	}
}
