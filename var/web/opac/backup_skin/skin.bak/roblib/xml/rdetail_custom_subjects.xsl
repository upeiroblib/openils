<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:marc="http://www.loc.gov/MARC21/slim" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>

<xsl:template match="/">

<xsl:apply-templates/>
</xsl:template>

<xsl:template match="marc:record">
<xsl:apply-templates select="marc:datafield[@tag=650]"/>
<xsl:apply-templates select="marc:datafield[@tag=653]"/>
</xsl:template>

<xsl:template match="marc:datafield">




<xsl:apply-templates select="marc:subfield"/>
<br />	

</xsl:template>

<xsl:template match="marc:subfield">
<xsl:value-of select="."/>
<xsl:if test="following-sibling::marc:subfield">
<xsl:text> &#187; </xsl:text>
</xsl:if>	
</xsl:template>

</xsl:stylesheet>