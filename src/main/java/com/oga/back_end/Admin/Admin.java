package com.oga.back_end.Admin;



import com.oga.back_end.user.UserDTO;



public class Admin extends UserDTO{
    public Admin(String userName, String firstName, String lastName, String password, String emailId) {
        super(userName, firstName, lastName, password, emailId);
       
    }

    final  String role = "Admin";
}
