class Api::SearchController < ApplicationController

  def index


    @search_results = PgSearch
      .multisearch(params[:query])
      .includes(:searchable).page(1).limit(5)


  end


end
