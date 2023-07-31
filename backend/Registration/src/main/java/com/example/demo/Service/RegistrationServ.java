package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.RegistrationEntity;
import com.example.demo.Repository.RegistrationRepos;

@Service
public class RegistrationServ {
	@Autowired
	private RegistrationRepos use;
	
	public RegistrationEntity saveDetails(RegistrationEntity s)
	{
		return use.save(s);
	}
	public List<RegistrationEntity> getAllDetails(){
		List<RegistrationEntity>arr=new ArrayList<>();
		arr=(List<RegistrationEntity>)use.findAll();
		return arr;
	}
	public void deleteById(int Id) {
		use.deleteById(Id);
	}
	public RegistrationEntity update(Long Id,RegistrationEntity s) {
		return use.saveAndFlush(s);
	}
	public Optional<RegistrationEntity>findById(int Id)
	{
		Optional<RegistrationEntity>user=use.findById(Id);
		return user;
	}
}
