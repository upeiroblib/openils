/**
 *  Custom routines for Robertson Library Evergreen environment.
 */

function rdetailShowCategories( ) {
  loadMARCRecord();
  loadParser();
}

var MARCRequest;
var transformer;  // The XSL to apply to the MARC record.

function loadMARCRecord( ) {

  MARCRequest = null;

  if (window.XMLHttpRequest) {
    // Code for all new browsers
    MARCRequest = new XMLHttpRequest();
  } else if ( window.ActiveXObject ) {
    // Code for IE 5 and 6
    MARCRequest = new ActiveXObject( "Microsoft.XMLHTTP" );
  }

  if ( MARCRequest != null ) {
    MARCRequest.onreadystatechange = marcrec_State_Change;
    MARCRequest.open( "GET", "/opac/extras/supercat/retrieve/marcxml/record/" + record.doc_id(), true );
    MARCRequest.send(null);
  }

}

function loadParser() {
  transformer = null;
  if (window.XMLHttpRequest) {
    // Code for all new browsers
    transformer = new XMLHttpRequest();
  } else if ( window.ActiveXObject ) {
    // Code for IE 5 and 6
    transformer = new ActiveXObject( "Microsoft.XMLHTTP" );
  }
  
  if (transformer != null) {
    transformer.onreadystatechange = marcrec_State_Change;
    transformer.open( "GET", "../xml/rdetail_custom_subjects.xsl" );
    transformer.send(null);
  }
    

}

function marcrec_State_Change() {

  if ( MARCRequest.readyState == 4 && transformer.readyState == 4) {
    // 4 means "loaded"
    if ( MARCRequest.status == 200 && transformer.status == 200) {
      // 200 means "OK"
      transformXSLT( transformer.responseXML, MARCRequest.responseXML, 'rdetail_categories' );
    } 

  } 

}

/**
 *  Cross-browser funciton to apply XSLT stylesheet to
 *  an XML document object.
 */ 
function transformXSLT( XSLStyleSheet, XMLData, InsertElementID) {
  if (window.ActiveXObject) {
    //Code for internet explorer
    TransformDoc = XMLData.transformNode(XSLStyleSheet);
    document.getElementById(InsertElementID).innerHTML = TransformDoc;
  }
  else if (document.implementation && document.implementation.createDocument) {
    //Code for mozilla
    XSLTProcessor = new XSLTProcessor();
    XSLTProcessor.importStylesheet(XSLStyleSheet);
    TransformDoc = XSLTProcessor.transformToFragment(XMLData, document);
    document.getElementById(InsertElementID).appendChild(TransformDoc);
  }
  else {
    return false;
  }


}

function getElementsByAttribute(oElm, strTagName, strAttributeName, strAttributeValue){
  var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
  var arrReturnElements = new Array();
  var oAttributeValue = (typeof strAttributeValue != "undefined")? new RegExp("(^|\\s)" + strAttributeValue + "(\\s|$)", "i") : null;
  var oCurrent;
  var oAttribute;
  for(var i=0; i<arrElements.length; i++){
    oCurrent = arrElements[i];
    oAttribute = oCurrent.getAttribute && oCurrent.getAttribute(strAttributeName);
    if(typeof oAttribute == "string" && oAttribute.length > 0){
      if(typeof strAttributeValue == "undefined" || (oAttributeValue && oAttributeValue.test(oAttribute))){
        arrReturnElements.push(oCurrent);
      }
    }
  }
  return arrReturnElements;
}
