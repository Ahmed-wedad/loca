package com.oga.back_end.Admin;

import java.util.List;

import com.oga.back_end.user.UserDTO;
import com.oga.back_end.user.UserService;

import org.springframework.stereotype.Service;

@Service
public class AdminService extends UserService{
    final private UserService userService;
    public AdminService(UserService userService){
        this.userService = userService;
    }
    public void register(Admin admin){
     userService.addUser((UserDTO)admin,List.of(admin.role) );
    }
    
}

