import docx4js from "docx4js"
import Base from "../base"


export default class Docx extends Base{
	static support(file){
		return true
	}

	load(data){
		return docx4js.load(data).then(docx=>{
			return docx.parse(docx4js.createVisitorFactory((wordModel, targetParent)=>{
				if(wordModel.type && wordModel.type.substr(0,6)=='style.'){
					return targetParent.addStyle(wordModel)
				}else if(targetParent)
					return targetParent.appendChild(wordModel)
				else
					return new Document(wordModel)
			}))
		})
	}
}

import Document from "./document"
import Section from "./section"
import Image from "./image"
import Text from "./text"

export let Models={
	Document
	,Section
	,Image
	,Text
}