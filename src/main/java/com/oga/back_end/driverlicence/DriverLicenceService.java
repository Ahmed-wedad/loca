package com.oga.back_end.driverlicence;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;


@Service
public class DriverLicenceService {
private final RestTemplate restTemplate;
    public DriverLicenceService(RestTemplate restTemplate) {

        this.restTemplate = restTemplate;
    }


    public void   verifyLicense(Result licence){

     String driverLicenseVerifurl="https://api-eu.idanalyzer.com";
     HttpHeaders headers = new HttpHeaders();
     headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
     MultiValueMap<String, String> map= new LinkedMultiValueMap<>();
     map.add("url",licence.getUrl());
     map.add("apikey","cTUE4ncaOCHQvKPBRXlfoaHrCsgOax6t");
     map.add("authenticate", "true");
     map.add("verify_expiry", "true");
     map.add("type","D");
     map.add("verify_documentno", licence.getLicence());
     map.add("verify_name",licence.getNom());
     map.add("verify_dob", licence.getDob().toString());
     map.add("country",licence.getCountry());
     map.add("region",licence.getGouvernorat());
     map.add("vault_save","true");
     HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
     ResponseEntity<DriverLicense> response = restTemplate.postForEntity(
             driverLicenseVerifurl, request , DriverLicense.class);
     DriverLicense dl;



 }

}

