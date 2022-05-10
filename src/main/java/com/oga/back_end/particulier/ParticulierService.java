package com.oga.back_end.particulier;

import java.util.List;

import com.oga.back_end.driverlicence.DriverLicense;
import com.oga.back_end.user.User;
import com.oga.back_end.user.UserDTO;
import com.oga.back_end.user.UserService;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class ParticulierService {
private final UserService userService;
public ParticulierService(UserService us){
    userService=us;
}
public void addPersonnel(UserDTO userDTO){

    userService.addUser(userDTO, List.of("personnel"));
}
}
