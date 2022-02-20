package com.blog.rbm.common.utils;

import com.alibaba.fastjson.annotation.JSONField;
import lombok.Data;

@Data
public class PageModel {
    private int currentPage;

    private int pageSize;

    private int totalPage;

    private int totalRecord;

    private PageModel(final int pageSize, final int page, final int totalRecord) {
        this.pageSize = pageSize;
        this.totalRecord = totalRecord;
        setTotalPage();
        setCurrentPage(page);
    }

    public static PageModel newPageModel(final int pageSize, final int page, final int totalRecord) {
        return new PageModel(pageSize, page, totalRecord);
    }

    public void setCurrentPage(int page) {
        currentPage = page;
        if (currentPage > totalPage) {
            currentPage = totalPage;
        }
        if (currentPage < 1) {
            currentPage = 1;
        }
    }

    @JSONField(serialize = false)
    public int getOffset() {
        if (pageSize < 0) {
            return -1;
        } else {
            return (currentPage - 1) * pageSize;
        }
    }

    private void setTotalPage() {
        if (pageSize <= 0) {
            totalPage = 0;
        } else if (totalRecord % pageSize == 0) {
            totalPage = totalRecord / pageSize;
        } else {
            totalPage = totalRecord / pageSize + 1;
        }
    }
}
