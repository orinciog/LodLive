PDF2Tables
===================

This module transforms each received pdf into csvs. It's a REST service, with the following properties:

> - receives a JSON
> - recognizeXXX methods output a JSON with all found tables from the given file
 
The structure of the output JSON for each method is:

    {
    "error":{"message":""},
	"result": {
		"tables_number": 2,
		"tables_found": [{
			"page": 1,
			"bounding_box": {
				"upper_left": {
					"x": 10,
					"y": 100
				},
				"lower_right": {
					"x": 100,
					"y": 1000
				}
			},
			"columns_number": 5,
			"content": [
				["row11", "row12", "", "row14", "row15"],
				["row12", "row22", "row23", "row24", "row25"]
			]
		},{
			"page": 2,
			"bounding_box": {
				"upper_left": {
					"x": 10,
					"y": 100
				},
				"lower_right": {
					"x": 100,
					"y": 1000
				}
			},
			"columns_number": 5,
			"content": [
				["row11", "row12", "", "row14", "row15"],
				["row12", "row22", "row23", "row24", "row25"]
			]
		}]
	}
    }
 


API
-------------

#### <i class="icon-pencil"></i> recognizePdf
**POST** Recognize from a given pdf file all tables and return the information in text format.
Input JSON:

    {
    "url":"pdf_url",
    "domain":"" 
    }
    or 
    {
    "content":"base64_encode_file",
    "domain":""
    }

#### <i class="icon-pencil"></i> recognizeImage
**POST** Recognize from a given image all tables and return the information in text format. 
Input JSON:

    {
    "url":"image_url",
    "domain":""
    }
    or 
    {
    "content":"base64_encode_file",
     "domain":""
    }
#### <i class="icon-pencil"></i> recognizeImageSection
**POST** Recognize from a given section from an image all tables and return the information in text format. 
Input JSON:

    {
    "url":"image_url",
    "domain":""
    }
    or 
    {
    "content":"base64_encode_file",
    "domain":""
    }

#### <i class="icon-pencil"></i> getDomains
**GET** Retrieves all recognized domains. There has to be at least one domain: "default". All other domains extend this "default" domain. 
Output JSON:

    {
    "domains":[]
    }
 
 
#### <i class="icon-pencil"></i> addDomain
**POST** Adds a new domain with a specified vocabulary. 
InputJSON:

    {
    "domain_name":"domain1",
    "vocabulary":["word1","word2"]
    }

#### <i class="icon-pencil"></i> addWordDomain
**POST** Adds a new word to a specified domain.
InputJSON:

    {
    "domain_name":"domain1",
    "word":"word1"
    }

