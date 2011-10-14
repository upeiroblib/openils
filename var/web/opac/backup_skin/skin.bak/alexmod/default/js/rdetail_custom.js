/**
 *  Custom routines for Robertson Library Evergreen environment.
 */

function rdetailShowCategories( ) {
  loadMARCRecord();
//  loadParser();


}

var MARCRequest;
var transformer;  // The XSL to apply to the MARC record.
var marctags;

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

function marcrec_State_Change() {

  if ( MARCRequest.readyState == 4 ) {
    // 4 means "loaded"
    if ( MARCRequest.status == 200 ) {
      // 200 means "OK"
     marctags = document.getElementsByTagName("MARC");

      for ( i = 0; i < marctags.length; i++ ) {
        dataField = marctags.item(i).getAttribute('dataField');
        marcItems = getElementsByAttribute( MARCRequest.responseXML, 'datafield', 'tag', dataField );

	
        buildSearchString = ( marctags[i].getAttribute( 'searchfield' ) != null ? true : false );
	    itemString = '';	
  	
        for ( j = 0; j < marcItems.length; j++ ) {

          nextItem = getElementsByAttribute( marcItems[j], 'subfield', 'code', ( marctags[i].getAttribute('subfield') != null ? marctags[i].getAttribute('subfield') : '*' ) );


          for ( k = 0; k < nextItem.length; k++ ) {

			itemString += nextItem[k].firstChild.nodeValue;

   			currentSubField = document.createElement( (buildSearchString ? 'a' : 'span') );
            
            setText( currentSubField, itemString );
			marctags[i].parentNode.appendChild( currentSubField );

			if ( buildSearchString ) {
			
			  href = '../xml/rresult.xml?rt=' + marctags[i].getAttribute('searchfield') + '&tp=' + marctags[i].getAttribute('searchfield') + '&t=';
  
              for ( l = 0; l <= k; l++ ) {
                href += nextItem[l].firstChild.nodeValue + '%20'; // it's ok to have a space at the end.

              }
              href += '&l=1&d=0&f=&av=';
              currentSubField.setAttribute('href', href);
              currentSubField.setAttribute('title', 'Perform a search on this subject' );
			}

            separatorItem = document.createElement('span');
			
     	    if ( k < nextItem.length - 1) {
              setText( separatorItem, ( marctags[i].hasAttribute('separator') ? ' ' + marctags[i].getAttribute('separator') + ' ' : ' ' ) );
              marctags[i].parentNode.appendChild( separatorItem );

            } else {
			  if ( marctags[i].getAttribute( 'newline' ) != null ) {
			    if ( marctags[i].getAttribute( 'newline' ) == 'no' ){
			      setText( separatorItem, ' ' );
                  marctags[i].parentNode.appendChild( separatorItem );
			    } else {
			      marctags[i].parentNode.appendChild( document.createElement('br') );
			    }
			  } else {
                marctags[i].parentNode.appendChild( document.createElement('br') );
              }  
            }


	
		    itemString = '';
            
          }
        } // for j
        if ( getText(marctags[i].parentNode).replace(/^\s+|\s+$/g, '') == '' ) {
      
            hideMe(marctags[i].parentNode.parentNode);
		}
	  }
//	  isbnnum = trimStr( getText( document.getElementById('rdetail_isbn') ) );
	  
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

function getElementsByAttribute(oElm, strTagName, strAttributeName, strAttributeValue) {
  var arrElements = oElm.getElementsByTagName(strTagName );
  var arrReturnElements = new Array();
  var oAttributeValue = new XRegExp( "(^|\\s)" + strAttributeValue + "(\\s|$)", "i" );
  var oCurrent;
  var oAttribute;
  for ( var i=0; i < arrElements.length; i++ ) {
   oCurrent = arrElements[i];
   oAttribute = oCurrent.getAttribute( strAttributeName );
   if( oAttribute != null && oAttribute.length > 0) { 
      if( oAttributeValue && oAttributeValue.test( oAttribute ) ) {
        arrReturnElements.push(oCurrent);
      }
    }
  }
  return arrReturnElements;
}

/**
 *  Hack to fix "electronic electronic resource" from showing up in physical desc. field.
 */
function rdetailFixPhysicalDescription() {
  phys = document.getElementById( 'rdetail_physical_desc' );
  physstr = getText(phys);
  setText( phys, physstr.substr(0, 22) ) ;
  if (physstr && physstr.substr(0, 22) == ' electronic electronic' ) {

    newphysstr = 'e' + physstr.substring( 13, physstr.length );
	setText(phys, newphysstr);
  }
  
  // Internet Explorer only
  if (physstr && physstr.substr(0, 21) == 'electronic electronic' ) {

    newphysstr = 'e' + physstr.substring( 12, physstr.length );
	setText(phys, newphysstr);
  }

}

function trimStr( str ) {
  return str.replace(/^\s+|\s+$/g, '');
}

/** 
 *  Cross-browser hacks below this point. Ugly.
 */
function getText( control ) {
  if (document.all){
    return control.innerText;
  } else {
    return control.textContent;
  } 
}

function setText(control, value) {
  if (document.all){
    control.innerText = value;
  }else{
    control.textContent = value; 
  } 
}
