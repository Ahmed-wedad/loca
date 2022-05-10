package com.oga.back_end.driverlicence;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping(path = "api/v1/DriverLicence")
public class DriverLicenceController {
private final DriverLicenceService driverLicenceService;

    public DriverLicenceController(DriverLicenceService driverLicenceService) {
        this.driverLicenceService = driverLicenceService;
    }


    @PostMapping("/verify")
    public boolean verify(@RequestParam("licence") String url,@RequestParam("nom") String nom ,
                          @RequestParam("prenom") String prenom,
                          @RequestParam("dob") LocalDate dob,
                          @RequestParam("exp") LocalDate exp,
                          @RequestParam("licencenumber") String  licensenumber,
                          @RequestParam("country") String country,
                          @RequestParam("region") String region
                          ){
    driverLicenceService.verifyLicense(new Result(url,nom,prenom,country,region,licensenumber,dob,exp));

        return false;

    }
}
