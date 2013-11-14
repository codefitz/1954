walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	
	v = v.replace(/\bemail\b/g, "post");
	v = v.replace(/\bEmail\b/g, "Post");
	v = v.replace(/\bebook\b/g, "book");
	v = v.replace(/\bEbook\b/g, "Book");
	v = v.replace(/\bRIAA\b/g, "MAFIAA");
	v = v.replace(/\briaa\b/g, "mafiaa");
	v = v.replace(/\bmpaa\b/g, "mafiaa");
	v = v.replace(/\bMPAA\b/g, "MAFIAA");
	v = v.replace(/\bBPI\b/g, "MAFIAA");
	v = v.replace(/\bNSA\b/g, "House of Un-American Activities");
	v = v.replace(/\bnsa\b/g, "house of un-American activities");
	v = v.replace(/\bchat\b/g, "private conversation");
	v = v.replace(/\bChat\b/g, "Private conversation");
	v = v.replace(/\bskype\b/g, "private conversation");
	v = v.replace(/\bSkype\b/g, "Private conversation");
	v = v.replace(/\bSMS\b/g, "Telegram");
	v = v.replace(/\bsms\b/g, "telegram");
	v = v.replace(/\bterrorist\b/g, "communist");
	v = v.replace(/\bTerrorist\b/g, "Communist");
	v = v.replace(/\bosama bin laden\b/g, "emmanuel goldstein");
	v = v.replace(/\bOsama Bin Laden\b/g, "Emmanuel Goldstein");
	v = v.replace(/\bOsama bin laden\b/g, "Emmanuel goldstein");
	v = v.replace(/\bOsama\b/g, "Goldstein");
	v = v.replace(/\bBin Laden\b/g, "Goldstein");
	v = v.replace(/\bbin laden\b/g, "Goldstein");
	v = v.replace(/\bMiddle east\b/g, "Eurasia");
	v = v.replace(/\bMiddle East\b/g, "Eastasia");
	v = v.replace(/\bmiddle east\b/g, "Eurasia");
	v = v.replace(/\bmiddle East\b/g, "Eastasia");
	v = v.replace(/\bIraq\b/g, "Eurasia");
	v = v.replace(/\biraq\b/g, "Eastasia");
	v = v.replace(/\bIran\b/g, "Eurasia");
	v = v.replace(/\biran\b/g, "Eastasia");
	v = v.replace(/\bAfghanistan\b/g, "Eastasia");
	v = v.replace(/\bafghanistan\b/g, "Eurasia");
	v = v.replace(/\binternet\b/g, "pneumatic tubes");
	v = v.replace(/\bInternet\b/g, "pneumatic tubes");
	v = v.replace(/\bwebsite\b/g, "bulletin board");
	v = v.replace(/\bWebsite\b/g, "Bulletin Board");
	v = v.replace(/\bsecurity camera\b/g, "telescreen");
	v = v.replace(/\bSecurity Camera\b/g, "Telescreen");
	v = v.replace(/\bSecurity camera\b/g, "Telescreen");
	v = v.replace(/\bsecurity Camera\b/g, "telescreen");
	
	textNode.nodeValue = v;
}


