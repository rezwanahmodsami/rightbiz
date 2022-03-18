<?

	$postcode = str_replace(array(" ","-","+"), "", urldecode($_GET['postcode']));
	//$api_key = "mCl4Ipjx1k-0_9S1EZ-fWA8923";
	$api_key = "FU2oGS1USEiJ0Yi_mgFXIg8980";
	$url = "https://api.getAddress.io/v2/uk/$postcode?api-key=$api_key";

    $json = array();
    $json['error'] = false;

	if(!$postcode){
        $json['html'] = '<div>Post code could not be located at the moment. Please enter your address manually.</div>';
        $json['error'] = true;
	}else{
	//	$result = file_get_contents($url);

		$ch =  curl_init($url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
		curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($ch, CURLOPT_TIMEOUT, 10);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json'));
		$result = curl_exec($ch);
/*
		$result = array(
			"Latitude" => "52.5198325",
			"Longitude" => "-1.9994564",
			"Addresses" => array(
				"0" => "11 Lodge Road, , , , , West Bromwich, West Midlands",
				"1" => "13 Lodge Road, , , , , West Bromwich, West Midlands",
				"2" => "15 Lodge Road, , , , , West Bromwich, West Midlands",
			));
	*/

		$result = json_decode($result, true);
		if($result['Addresses']){
			$lat = $result['Latitude'];
			$lon = $result['Longitude'];
			$b = [];
			foreach($result['Addresses'] as $v){
				$a = explode(",", $v);
				$b["ad1"] = trim($a[0]);
				$b["ad2"] = trim($a[1]);
				$b["twn"] = trim($a[5]);
				$b["cty"] = trim($a[6]);
				$imp = implode(", ",array_filter($b));
				$li .= '<option data-ad1="'.$b["ad1"].'" data-ad2="'.$b["ad2"].'" data-twn="'.$b["twn"].'" data-cty="'.$b["cty"].'" data-lat="'.$lat.'" data-lon="'.$lon.'">'.$imp.'</option>';
			}
			$json['html'] = '<select class="form-control" id="addresses" name="addresses" onchange="setAddress(this)"><option value="0">Please select your address</option>'.$li.'</select>';
            $json['error'] = false;
		}else{
			$json['html'] = '<div>Post code could not be located at the moment. Please enter your address manually.</div>';
            $json['error'] = true;
		}

	}

    echo json_encode($json);

?>