class Api::SearchController < ApplicationController

  def index
    if params[:query].present?
      @results = PgSearch.multisearch(params[:query]).includes(:searchable)
      if (@results.nil?)
        return nil
      else
        @artists = @results.where(searchable_type: "Artist").map(&:searchable)
        @venues = @results.where(searchable_type: "Venue").map(&:searchable)
      end


      render :index
    end
  end
end
