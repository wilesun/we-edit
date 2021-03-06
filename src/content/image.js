import React, {Component, PropTypes} from "react"
import {NoChild} from "./any"

export default class Image extends NoChild{
    static displayName="image"
    createComposed2Parent(){
        const {src, extent:{width,height}, ...others}=this.props
        let availableSpace=this.context.parent.nextAvailableSpace({width,height})
        return <image {...{
                width,
                height,
                xlinkHref: src,
                y:-height
            }} />
    }
}
