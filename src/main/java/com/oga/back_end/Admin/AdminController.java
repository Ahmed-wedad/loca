package com.oga.back_end.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/admin")
public class AdminController  {
  @Autowired
  final private AdminService adminService;
  public AdminController(AdminService service) {
    adminService=service;
  }



 @PostMapping
   public void register(@RequestBody Admin admin){
 
      adminService.register(admin);
}
 
}