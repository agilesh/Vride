package com.vride.application;

import org.springframework.data.repository.Repository;


public interface AdminRepository extends Repository<Admin, Integer> {
	 Admin findByMemailAndMpassword(String Memail, String Mpassword);
}
