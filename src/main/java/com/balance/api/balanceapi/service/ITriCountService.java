package com.balance.api.balanceapi.service;

import java.util.List;

import com.balance.api.balanceapi.domain.TriCount;

public interface ITriCountService {
    public boolean saveTriCount(TriCount triCount);

    public List<TriCount> findAll();
}