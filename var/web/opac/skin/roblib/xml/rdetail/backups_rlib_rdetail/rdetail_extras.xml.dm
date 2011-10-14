
<div xmlns:xi="http://www.w3.org/2001/XInclude">

	<table class='rdetails_extra_links'>
		<thead>
			<tr>
				<td id='rdetail_copy_info_link' class='rdetail_extras_td rdetail_extras_selected' 
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("copyinfo");' 
						class='classic_link'>&rdetail.extras.summary;</a>
				</td>

				<td id='rdetail_viewcn_link' class='rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("cn");' 
						class='classic_link'>&rdetail.extras.browser;</a>
				</td>

				<td id='rdetail_summary_link' class='hide_me rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("summary");' 
						class='classic_link'>&rdetail.extras.bib_summary;</a>
				</td>

				<td id='rdetail_reviews_link' class='hide_me rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("reviews");' 
						class='classic_link'>&rdetail.extras.reviews;</a>
				</td>

				<td id='rdetail_toc_link' class='hide_me rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("toc");' 
						class='classic_link'>&rdetail.extras.toc;</a>
				</td>

				<td id='rdetail_excerpt_link' class='hide_me rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("excerpt");' 
						class='classic_link'>&rdetail.extras.excerpt;</a>
				</td>

				<td id='rdetail_preview_link' class='hide_me rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("preview");' 
						class='classic_link'>&rdetail.extras.preview;</a>
				</td>

				<td id='rdetail_anotes_link' class='hide_me rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("anotes");' 
						class='classic_link'>&rdetail.extras.author.notes;</a>
				</td>

				<td id='rdetail_annotation_link' class='hide_me rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("annotation");' 
						class='classic_link'>&rdetail.extras.annotation;</a>
				</td>

				<td id='rdetail_viewmarc_link' class='rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("marc");' 
						class='classic_link'>&rdetail.extras.marc;</a>
				</td>

				<td id='rdetail_novelist_link' class='hide_me rdetail_extras_td'
					style='padding-right: 15px; padding-left: 15px;' >
					<a href='javascript:rdetailShowExtra("novelist");' 
						class='classic_link'>&rdetail.extras.novelist;</a>
				</td>

			</tr>
		</thead>
	</table>

	<div id='rdetail_extras_div' style='width: 95%;'> 
		<div id='rdetail_extras_loading' class='hide_me' 
			style='padding: 10px;'>&common.loading;</div>
		<!--#include virtual="rdetail_copyinfo.xml"-->

		<div id='rdetail_summary_div' class='rdetail_extras_div hide_me'> </div>

		<div id='rdetail_reviews_div' class='rdetail_extras_div hide_me'> 
			<div id='rdetail_review_container'/>
			<!--
			<div id='rdetail_review_template' style='width: 100%;'>
				<div name='review_header' style='width: 100%; padding: 15px; border: 1px solid #E0E0E0;'> </div>
				<div name='review_text' style='width: 100%; padding: 15px; border: 1px solid #E0E0E0;'> </div>
			</div>
			-->
            <div id='rdetail_chilifresh_reviews' class='hide_me'>
                <div id='chilifreshReviewLink' name='chilifreshReviewLink' class='chili_review'></div>
                <div id='chilifreshReviewResult' name='chilifreshReviewResult' style='display:none'></div>
            </div>
		</div>
		
		<div id='rdetail_toc_div' class='rdetail_extras_div hide_me'> </div>

		<div id='rdetail_excerpt_div' class='rdetail_extras_div hide_me'> </div>

		<div id='rdetail_preview_div' class='rdetail_extras_div hide_me'> </div>

		<div id='rdetail_anotes_div' class='rdetail_extras_div hide_me'> </div>

		<div id='rdetail_marc_div' class='rdetail_extras_div hide_me'> 
			<div id='rdetail_view_marc_box'> </div>
		</div>

        <div id='rdetail_novelist_div' class='rdetail_extras_div hide_me'>
            <div id="NoveListSelect" class="NoveListSelect">
                <div id="NoveListAnchor" class="NoveListSelect"></div>
                <div id="novsuggestions"></div>
                <div id="nextreads"></div>
                <div id="novrelatedauthors"></div>
               <div id="novrelateditems"></div>
            </div>
        </div>

		<div id='rdetail_cn_browse_div' style='text-align: center;' class='hide_me'>

			<div id='cn_browse_none' class='hide_me color_4' style='width: 90%; text-align: center; margin: 10px;'>
				&rdetail.extras.call.null;
			</div>

			<div id='rdetail_cn_browse_select_div' 
				style='width: 100%; border: 1px solid black; padding: 6px; margin-top: 5px;'>
				<span>&rdetail.extras.call.local; </span>
				<select id='cn_browse_selector'>
				</select>
			</div>
			
			<!--#include virtual="../common/cn_browse.xml"-->
		</div>

		<!--#include virtual="rdetail_cn_details.xml"-->

	</div>
	<!-- Text for dynamic JavaScript -->
	<div id='rdetail_preview_full_text' class='hide_me'>&rdetail.extras.preview.fulltext;</div>
	<div id='rdetail_preview_title' class='hide_me'>&rdetail.extras.preview.title;</div>
	<div id='rdetail_preview_badge' class='hide_me'>&rdetail.extras.preview.badge;</div>

    <!-- ChiliFresh setup -->
    <script language='javascript' type='text/javascript'>
        var chilifresh = '<!--#echo var="OILS_CHILIFRESH_ACCOUNT"-->';
        if (chilifresh == '(none)') { chilifresh = false; }
    </script>
    <!--if expr="${OILS_CHILIFRESH_ACCOUNT} && ${OILS_CHILIFRESH_ACCOUNT}!='(none)'"-->
        <input type="hidden" id="chilifresh_account" name="chilifresh_account"
            value="<!--#echo var='OILS_CHILIFRESH_ACCOUNT'-->" />
        <input type="hidden" id="chilifresh_profile" name="chilifresh_profile"
            value="<!--#echo var='OILS_CHILIFRESH_PROFILE'-->" />
        <input type="hidden" id="chilifresh_version" name="chilifresh_version" value="onsite_v1" />
        <input type="hidden" id="chilifresh_type" name="chilifresh_type" value="search" />
        <script language="javascript" type="text/javascript" src="<!--#echo var='OILS_CHILIFRESH_URL'-->"></script>
    <!--endif-->

    <!-- Novelist setup -->
    <!--if expr="${OILS_NOVELIST_URL} && ${OILS_NOVELIST_URL}!='(none)'"-->
        <script type="text/javascript" id="EIT" src="<!--#echo var='OILS_NOVELIST_URL'-->"></script>
    <!--endif-->
    <script language='javascript' type='text/javascript'>
        var novelist = '<!--#echo var="OILS_NOVELIST_URL"-->';
        if (novelist == '(none)') { novelist = false; }
    </script>

</div>
