<%@page import="java.text.SimepleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
  String protocol = request.getProtocol();
  if(protocol.equals("HTTP/1.0")){
    response.setDateHeader("Express",-1);
    response.setHeader("pragma","no-cache");
  }else if(protocol.equals("HTTP/1.1")){
    response.setHeader("Cache-control","no-cache");
  }
  Date now = new Date();
  SimpleDateFormat sdf = new SimepleDateFormat("yyyy.MM.dd - HH:mm:ss");
  String displayTime = sdf.format(now);
%>
<%=displayTime%>
